import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-pedidos-de-compras',
  templateUrl: './editar-pedidos-de-compras.component.html',
  styleUrls: ['./editar-pedidos-de-compras.component.css']
})
export class EditarPedidosDeComprasComponent implements OnInit{
  mensagem: string = '';
  



  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://localhost:8082/api/pedidos-de-compras/' + id)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formEditarPedidos.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })
  }



 formEditarPedidos = new FormGroup({
  idPedidos : new FormControl('', [Validators.required]),
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
       return this.formEditarPedidos.controls;
     }


     onSubmit(): void {
      this.httpClient
      .put('http://localhost:8082/api/pedidos-de-compras',
      this.formEditarPedidos.value
     

     )

      .subscribe({
        next: (data: any) => {
          this.mensagem = `Pedidos de Compras atualizado com sucesso!`;

        },
        error: (e) => {

          console.log(e.error);

        }
      })
     
}


printPage() {
  window.print();
}
}
