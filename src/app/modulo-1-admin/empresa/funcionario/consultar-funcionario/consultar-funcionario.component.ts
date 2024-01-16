import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-consultar-funcionario',
  templateUrl: './consultar-funcionario.component.html',
  styleUrls: ['./consultar-funcionario.component.css']
})



export class ConsultarFuncionarioComponent implements OnInit {

  empresas: any [] = []
  pagina: number = 1; //contador da paginação da consulta
  filtro: any = { nome_contato: '' }; //filtro de pesquisa na consulta
    //construtor
 
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }


    ngOnInit(): void {

      var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;

      this.httpClient.get('http://localhost:8081/api/empresa')
      .subscribe({ //capturando o retorno da API
        next: (data) => { //recebe o retorno de sucesso da API
          //armazenar os dados na variável
          this.empresas = data as any[];
          this.formConsultarFuncionario.patchValue(data);

        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
      
    }

    pageChange(event: any): void {
      this.pagina = event;
    }



    formConsultarFuncionario = new FormGroup({
      idEmpresa: new FormControl('',),
    });

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

