import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-faturamento-pj',
  templateUrl: './editar-faturamento-pj.component.html',
  styleUrls: ['./editar-faturamento-pj.component.css']
})
export class EditarFaturamentoPjComponent implements OnInit {
 
  mensagem: string = '';
  formFaturamentopj: FormGroup;


  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute,
private formBuilder: FormBuilder) {
    this.formFaturamentopj = this.formBuilder.group({
	  idfaturamento: new FormControl('', [Validators.required]),
  empresa : new FormControl('', [Validators.required]),
  cnpj : new FormControl('', [Validators.required]),
  data_inicio : new FormControl('', [Validators.required]),
  data_fim : new FormControl('', [Validators.required]),
    });
  }


 
  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.httpClient.get('http://localhost:8082/api/faturamento/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
            this.formFaturamentopj.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
  

     get form(): any {
       return this.formFaturamentopj.controls;
     }

     onSubmit(): void {
      if (this.formFaturamentopj.valid) {
        // Formate as datas para o formato ISO 8601
        const dataInicio = this.formatDate(this.formFaturamentopj.value.data_inicio);
        const dataFim = this.formatDate(this.formFaturamentopj.value.data_fim);
          this.formFaturamentopj.patchValue({
          data_inicio: dataInicio,
          data_fim: dataFim
        });
    
        // Enviar o formulário para o endpoint
        this.httpClient
          .put('http://localhost:8082/api/faturamento',this.formFaturamentopj.value)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Faturamento Aualizado com Sucesso!`;
              // Limpar o formulário ou realizar ações adicionais, se necessário
             this.formFaturamentopj.reset();
            },
            error: (e) => {
              console.log(e.error);
              // Realizar ações de tratamento de erro, se necessário
            }
          });
      } else {
        // Realize alguma ação ou exiba uma mensagem de erro se o formulário for inválido
      }
    }


formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date.toISOString(); // Formatar para ISO 8601
  } else {
    console.error('Data inválida:', dateString);
    return ''; // Ou outra ação apropriada
  }
}

printPage() {
  window.print();
}





}

