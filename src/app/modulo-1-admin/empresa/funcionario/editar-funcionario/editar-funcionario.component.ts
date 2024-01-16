import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})




export class EditarFuncionarioComponent {

  funcionarios: any [] = []
  funcoes: any [] = []
  itensPorPagina = 5;
  pagina: number = 1; //contador da paginação da consulta

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute

  ) {
  }

  ngOnInit(): void {
     
    var idFuncionario = this.activatedRoute.snapshot.paramMap.get('id') as string;    
    this.httpClient.get('http://localhost:8083/api/funcionario/' + idFuncionario
    
    )
    .subscribe({
      next: (data: any) => {
        //preencher o formulário com os dados do produto obtido
        this.formEditarFuncionario.patchValue(data);

      },
      error: (e) => {
        console.log(e);
      }
    })
    
    this.httpClient.get('http://localhost:8083/api/funcao')
    .subscribe({
      next: (data: any) => {
        //preencher o formulário com os dados do produto obtido
        this.funcoes = data as any[];
      },
      error: (e) => {
        console.log(e);
      }
    }) 


}

pageChange(event: any): void {
  this.pagina = event;
  this.itensPorPagina = event;

}

formEditarFuncionario = new FormGroup({
  idFuncionario: new FormControl('',),
  idEmpresa: new FormControl('',),
  idFuncao: new FormControl('',),
  nome: new FormControl('', [Validators.required]),
  cpf: new FormControl('', [Validators.required]),
  rg: new FormControl('', [Validators.required]),
  status: new FormControl('', [Validators.required]),
    });

    get form(): any {
      return this.formEditarFuncionario.controls;
    }

    EditarSubmit(): void {
      console.log(this.formEditarFuncionario.value);
}

}



