import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationHelper } from 'src/app/helpers/authentication.helper';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment.development';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-cadastrar-pedidos-de-compras',
  templateUrl: './cadastrar-pedidos-de-compras.component.html',
  styleUrls: ['./cadastrar-pedidos-de-compras.component.css']
})
export class CadastrarPedidosDeComprasComponent  implements OnInit{

  @ViewChild('planoSelect') planoSelect!: ElementRef;


  mensagem: string = '';
  empresas: any [] = []

  constructor(
    private httpClient: HttpClient, 
    private formBuilder: FormBuilder,
    private config: NgSelectConfig
     ) {

      this.config.notFoundText = 'Custom not found';
      this.config.appendTo = 'body';
      this.config.bindValue = 'value';
     }

     ngAfterViewInit(): void {
      if (this.planoSelect) {
        const selectElement = $(this.planoSelect.nativeElement) as any;
    
        selectElement.select2({
          theme: 'bootstrap-5',
        }).on('change', () => {
          const selectedValue = String(selectElement.val());
          this.formPedidos.get('idEmpresa')?.setValue(selectedValue);
          this.formPedidos.get('idEmpresa')?.updateValueAndValidity();
        });
    
        const lastOptionValue = this.empresas.length > 0 ? this.empresas[this.empresas.length - 1].id : '';
    
        selectElement.next().find('.select2-selection').addClass('form-control');
        selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
    
        selectElement.val(lastOptionValue).trigger('change');
      }
    }

 ngOnInit(): void {

  this.httpClient.get('http://localhost:8081/api/empresa')
  .subscribe({ //capturando o retorno da API
    next: (data) => { //recebe o retorno de sucesso da API
      //armazenar os dados na variável
      this.empresas = data as any[];
    },
    error: (e) => { //recebe o retorno de erro da API
      console.log(e);
    }
  });
  
}

 
 formPedidos = new FormGroup({
  idEmpresa : new FormControl('', [Validators.required]),
  numerodopedido: new FormControl('', [Validators.required]),
  venda: new FormControl('', [Validators.required]),
  notafiscal: new FormControl('', [Validators.required]),
  valor: new FormControl('', [Validators.required]),
  creditos: new FormControl('', [Validators.required]),
  comprador: new FormControl('', [Validators.required]),
  telefone: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  responsavelfinanceiro: new FormControl('', [Validators.required]),
  telefonefinanceiro: new FormControl('', [Validators.required]),
  whatsapp: new FormControl('', [Validators.required]),
  emailfinanceiro: new FormControl('', [Validators.required]),
  data_de_pagamento: new FormControl('', [Validators.required]),
  parcelas: new FormControl('', [Validators.required]),
  forma_de_pagamento: new FormControl('', [Validators.required]),
  observacoes: new FormControl('', [Validators.required]),

       });
  

     get form(): any {
       return this.formPedidos.controls;
     }


     onSubmit(): void {

      this.formatDates();


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

formatDates(): void {
  const dataDePagamento = this.formPedidos.value.data_de_pagamento;

  if (dataDePagamento !== null && dataDePagamento !== undefined) {
    // Aqui você tem certeza de que dataDePagamento é uma string
    this.formPedidos.patchValue({
      data_de_pagamento: this.formatDate(dataDePagamento)
    });
  }
}




formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date.toISOString(); // Formatar para ISO 8601
  } else {
    console.error('Data inválida:', dateString);
    return ''; // Ou outra ação apropriada
  }
}


printPage() {
  window.print();
}

}
