import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-consultar-chamado',
  templateUrl: './consultar-chamado.component.html',
  styleUrls: ['./consultar-chamado.component.css']
})
export class ConsultarChamadoComponent implements OnInit {


  chamados: any [] = []
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
    //construtor
 
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


    ngOnInit(): void {

      this.httpClient.get('http://localhost:8083/api/chamados')
      .subscribe({ //capturando o retorno da API
        next: (data) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.chamados = data as any[];
        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
      
    }

    pageChange(event: any): void {
      this.pagina = event;
    }

    onDelete(idChamados: number, nome: string): void {
      if(window.confirm('Deseja realmente excluir o Chamado selecionado?\n' + nome)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://localhost:8083/api/chamados/' + idChamados)
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
