import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ConsultarUnidades } from 'src/app/models/consultar-unidades.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditarContatos } from 'src/app/models/editar-contatos.model';

@Component({
  selector: 'app-consultar-unidade',
  templateUrl: './consultar-unidade.component.html',
  styleUrls: ['./consultar-unidade.component.css']
})
export class ConsultarUnidadeComponent implements OnInit {
  
  mensagem: string = '';
  unidade: ConsultarUnidades | null = null;
  unidades: any [] = []
  unidadeSelecionada: any = null;
  contato: EditarContatos | null = null;
  pagina: number = 1; 
  filtro: any = { curso: '' }; 
  itensPorPagina = 5;
  paginaAtual: number = 1; 

  
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8082/api/unidadedetreinamento')
    .subscribe({ 
      next: (data) => { 
        this.unidades = data as any[];
      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });

  }

  exibirContatos(unidade: any) {
    this.unidadeSelecionada = unidade;
                 }
	 
  setContato(contato: EditarContatos): void {
  this.contato = contato;
  this.formEditarContato.patchValue(contato);
                }

    setUnidade(unidade: ConsultarUnidades): void {
    this.unidade = unidade;
    this.formCadastrarContato.patchValue(unidade);  
    this.formEditarContato.patchValue(unidade);    
  
                }
        formCadastrarContato = new FormGroup({
        idUnidadedetreinamento: new FormControl('', [Validators.required]),
        contato: new FormControl('', [Validators.required]),
        telefone_1: new FormControl('', [Validators.required]),
        telefone_2: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
          });

          formEditarContato = new FormGroup({
            idUnidadedetreinamento: new FormControl('', [Validators.required]),
            idContato: new FormControl('', [Validators.required]),
            contato: new FormControl('', [Validators.required]),
            telefone_1: new FormControl('', [Validators.required]),
            telefone_2: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
              });

          get form(): any {
            return this. formCadastrarContato.controls;
            return this. formEditarContato.controls;

          }
         
          CadastroSubmit(): void {
            this.httpClient.post('http://localhost:8082/api/contato', this.formCadastrarContato.value)
            .subscribe({
              next: (data: any) => {
                this.mensagem = `Contato Atualizada com sucesso!`;
                  this.formCadastrarContato.reset();       
                                 },
              error: (e) => {
              }
            });      
      
          }

          EditarContatoSubmit(): void {
            this.httpClient.put('http://localhost:8082/api/contato', this.formEditarContato.value)
            .subscribe({
              next: (data: any) => {
                this.mensagem = `Contato Atualizada com sucesso!`;
                  this.formCadastrarContato.reset();       
                                 },
              error: (e) => {
              }
            });      
      
          }
                 
  onDelete(idUnidadedetreinamento: number, unidade: string): void {
    if(window.confirm('Deseja realmente excluir a Unidade de Treinamento selecionado?\n' + unidade)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('http://localhost:8082/api/unidadedetreinamento/' + idUnidadedetreinamento)
        .subscribe({
          next: (data: any) => {
            this.ngOnInit();
          },
          error: (e) => {
          }
        })
    }
  }
                 
  ContatoDelete(idContato: number, contato: string): void {
    if(window.confirm('Deseja realmente excluir a Unidade de Treinamento selecionado?\n' + contato)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('http://localhost:8082/api/contato/' + idContato)
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
