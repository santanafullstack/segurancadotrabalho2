import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastrar-pedidos-de-compras',
  templateUrl: './cadastrar-pedidos-de-compras.component.html',
  styleUrls: ['./cadastrar-pedidos-de-compras.component.css']
})
export class CadastrarPedidosDeComprasComponent {



  mensagem: string = '';

  constructor(
   private httpClient: HttpClient,
 ) {}



 
 formPedidos = new FormGroup({
  nomefantasia : new FormControl('', [Validators.required]),
  cnpj : new FormControl('', [Validators.required]),
  comprador : new FormControl('', [Validators.required]),
  telefone : new FormControl('', [Validators.required]),
  email : new FormControl('', [Validators.required]),
  numerodopedido : new FormControl('', [Validators.required]),
  venda : new FormControl('', [Validators.required]),
  notafiscal : new FormControl('', [Validators.required]),
  valor : new FormControl('', [Validators.required]),
  creditos : new FormControl('', [Validators.required]),

       });
  

     get form(): any {
       return this.formPedidos.controls;
     }


     onSubmit(): void {
      this.httpClient
      .post('http://localhost:8082/api/pedidos-de-compras',
      this.formPedidos.value
     

     )

      .subscribe({
        next: (data: any) => {
          this.mensagem = `Pedidos de Compras cadastrado com sucesso!`;

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


printPage() {
  window.print();
}

}
