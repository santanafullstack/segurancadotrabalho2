import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-faturamento-pj',
  templateUrl: './cadastrar-faturamento-pj.component.html',
  styleUrls: ['./cadastrar-faturamento-pj.component.css']
})
export class CadastrarFaturamentoPjComponent{

  mensagem: string = '';

  formFaturamentopj: FormGroup;


  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this.formFaturamentopj = this.formBuilder.group({
  empresa : new FormControl('', [Validators.required]),
  cnpj : new FormControl('', [Validators.required]),
  data_inicio : new FormControl('', [Validators.required]),
  data_fim : new FormControl('', [Validators.required]),
    });
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
          .post('http://localhost:8082/api/faturamento',this.formFaturamentopj.value)
          .subscribe({
            next: (data: any) => {
              this.mensagem = `Faturamento cadastrado com sucesso!`;
              // Limpar o formulário ou realizar ações adicionais, se necessário
             this.formFaturamentopj.reset();
            },
            error: (e) => {
          
              console.log(e.error);
              if (e.error && e.error.message) {
                // Exiba a mensagem de erro da API
                this.mensagem = e.error.message;
              } else {
                // Se não houver uma mensagem de erro específica da API, exiba uma mensagem genérica
                this.mensagem = 'Erro desconhecido ao realizar a matrícula.';
              }
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

