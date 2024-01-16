import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-pessoa-fisica',
  templateUrl: './editar-pessoa-fisica.component.html',
  styleUrls: ['./editar-pessoa-fisica.component.css']
})
export class EditarPessoaFisicaComponent {

  mensagem: string = '';

  formPessoaFisica: FormGroup;


  constructor(private httpClient: HttpClient, 
  private formBuilder: FormBuilder, 
  private activatedRoute: ActivatedRoute
) {
    this. formPessoaFisica = this.formBuilder.group({  
	idpessoafisica: new FormControl('', [Validators.required]),
    pessoafisica: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    telefone_1: new FormControl('', [Validators.required]),
    telefone_2: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    });
  }


 
  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://localhost:8081/api/pessoa-fisica/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formPessoaFisica.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })

  }
  

     get form(): any {
       return this.formPessoaFisica.controls;
     }

     
      onSubmit(): void {
        this.httpClient
        .put('http://localhost:8081/api/pessoa-fisica',
         this.formPessoaFisica.value
       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Pessoa Fisica editada com sucesso!`;

          },
          error: (e) => {

            console.log(e.error);

          }
        })

      
}





}

