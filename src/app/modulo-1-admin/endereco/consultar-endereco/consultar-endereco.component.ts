import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultar-endereco',
  templateUrl: './consultar-endereco.component.html',
  styleUrls: ['./consultar-endereco.component.css']
})
export class ConsultarEnderecoComponent implements OnInit {


  endereco: any [] = []
  pagina: number = 1; 
  filtro: any = { logradouro: '' }; 
  itensPorPagina = 10;
  paginaAtual: number = 1; 
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


    ngOnInit(): void {

      this.httpClient.get('http://localhost:8082/api/endereco')
      .subscribe({ //capturando o retorno da API
        next: (data) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.endereco = data as any[];
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
      
    }

    pageChange(event: any): void {
      this.pagina = event;
    }

    onDelete(idEndereco: number, nome: string): void {
      if(window.confirm('Deseja realmente excluir o Endereco selecionado?\n' + nome)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://localhost:8082/api/endereco/' + idEndereco)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }
  


}
