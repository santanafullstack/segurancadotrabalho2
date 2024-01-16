import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-pessoa-fisica',
  templateUrl: './cadastrar-pessoa-fisica.component.html',
  styleUrls: ['./cadastrar-pessoa-fisica.component.css']
})
export class CadastrarPessoaFisicaComponent {

  mensagem: string = '';

  formPessoaFisica: FormGroup;


  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {
    this. formPessoaFisica = this.formBuilder.group({  
    pessoafisica: new FormControl('', [Validators.required]),
    rg: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    telefone_1: new FormControl('', [Validators.required]),
    telefone_2: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    });
  }


  

     get form(): any {
       return this.formPessoaFisica.controls;
     }

     
      onSubmit(): void {
        this.httpClient
        .post('http://localhost:8081/api/pessoa-fisica',
         this.formPessoaFisica.value
       

       )

        .subscribe({
          next: (data: any) => {
            this.mensagem = `Pessoa Fisica cadastrada com sucesso!`;

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

      
}

}

