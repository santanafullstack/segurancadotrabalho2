import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastrar-funcao-perfilempresa',
  templateUrl: './cadastrar-funcao-perfilempresa.component.html',
  styleUrls: ['./cadastrar-funcao-perfilempresa.component.css']
})
export class CadastrarFuncaoPerfilempresaComponent {


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
      .post('http://localhost:8081/api/funcao',
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
