import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import {ConsultarContatos} from 'src/app/models/consultar-contatos.model';


@Component({
  selector: 'app-consultar-contatos',
  templateUrl: './consultar-contatos.component.html',
  styleUrls: ['./consultar-contatos.component.css']
})
export class ConsultarContatosComponent implements OnInit {

  
    mensagem: string = '';
    contatoss: ConsultarContatos | null = null;
  
    empresaSelecionada: any = null;
    contatos: any [] = []
    funcoes: any [] = []
    empresas: any [] = []
    pagina: number = 1; //contador da paginação da consulta
    filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
   
    exibirContatos(empresa: any) {
      this.empresaSelecionada = empresa;
    }
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


   
    ngOnInit(): void {
      var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
      this.httpClient.get('http://localhost:8083/api/empresa' 
      )
      .subscribe({ //capturando o retorno da API
        next: (data) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.contatos = data as any[];


        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });

      var idContato = this.activatedRoute.snapshot.paramMap.get('id') as string;

      //consultando o produto através do id
      this.httpClient.get('http://localhost:8083/api/contato/' + idContato )
        .subscribe({
          next: (data: any) => {
            //preencher o formulário com os dados do produto obtido
            this.contatos = data as any[];
          },
          error: (e) => {
            console.log(e);
          }
        })  
    }

    pageChange(event: any): void {
      this.pagina = event;
    }



    setContato(contato: ConsultarContatos): void {
      this.contatoss = contato;
  
    }

    

    onDelete(idChamados: number, nome: string): void {
      if(window.confirm('Deseja realmente excluir o Chamado selecionado?\n' + nome)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://localhost:8081/api/chamados/' + idChamados)
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
