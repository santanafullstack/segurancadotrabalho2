import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-funcao',
  templateUrl: './cadastrar-funcao.component.html',
  styleUrls: ['./cadastrar-funcao.component.css']
})
export class CadastrarFuncaoComponent {


  mensagem: string = '';

  //construtor
  constructor(
   private httpClient: HttpClient,
 ) {}


 formFuncao = new FormGroup({
  funcao: new FormControl('', [Validators.required]),
  cbo: new FormControl('', [Validators.required]),
  descricao: new FormControl('', [Validators.required]),

    });

    get form(): any {
      return this.formFuncao.controls;
    }


    onSubmit(): void {
      this.httpClient
      .post('http://localhost:8083/api/funcao',
      this.formFuncao.value
     )

      .subscribe({
        next: (data: any) => {
          this.mensagem = `Função cadastrada com sucesso!`;

        },
        error: (e) => {

          console.log(e.error);

        }
      })

    
}

}
