import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { CadastrarTurmas } from 'src/app/models/cadastrar-turmas.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ConsultarPedidos } from 'src/app/models/consultar-pedidos.model';

@Component({
  selector: 'app-consultar-pedidos-de-compras',
  templateUrl: './consultar-pedidos-de-compras.component.html',
  styleUrls: ['./consultar-pedidos-de-compras.component.css']
})
export class ConsultarPedidosDeComprasComponent implements OnInit, AfterViewInit  {
 @ViewChild('content') popupview!: ElementRef;

 



 pedido: ConsultarPedidos | null = null;
 pedidoSelecionado: any = null;
 matriculas: any [] = []
 Invoiceheader: any;
 invoiceno: any;
 dtoptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject<any>();
 pagina: number = 1; 
 filtro: any = { matriculas: '' }; 
 itensPorPagina = 10;
 paginaAtual: number = 1; 

  pedidos: any [] = []


  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,

  ) {
  }

  exibirPedidos(pedido: any) {
    this.pedidoSelecionado = pedido;
                 }

  
  ngAfterViewInit(): void {
    $(document).ready(() => {
      const table = $('#myTable').DataTable({
        
        language: {
          url: 'https://cdn.datatables.net/plug-ins/1.11.6/i18n/Portuguese-Brasil.json'
        }
      });
      
    });
  }
  

  ngOnInit(): void {

    this.httpClient.get('http://localhost:8082/api/pedidos-de-compras')
    .subscribe({ //capturando o retorno da API
      next: (data) => { //recebe o retorno de sucesso da API
        this.dtTrigger.next(null);
        this.pedidos = data as any[];
      },
      error: (e) => { //recebe o retorno de erro da API
        console.log(e);
      }
    });
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      language: {
        searchPlaceholder: 'Text Customer'
      }
    };
    
  }


  onDelete(idPedidos: number, nomefantasia: string): void {
    if(window.confirm('Deseja realmente excluir o Pedidos selecionado?\n' + nomefantasia)) {
      //enviando uma reqquisição para o serviço de exclusão da API
      this.httpClient.delete('http://localhost:8082/api/pedidos-de-compras/' + idPedidos)
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
