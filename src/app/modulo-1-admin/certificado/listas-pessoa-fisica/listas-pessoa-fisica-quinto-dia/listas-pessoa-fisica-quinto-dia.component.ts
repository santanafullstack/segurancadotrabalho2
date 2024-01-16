import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listas-pessoa-fisica-quinto-dia',
  templateUrl: './listas-pessoa-fisica-quinto-dia.component.html',
  styleUrls: ['./listas-pessoa-fisica-quinto-dia.component.css']
})
export class ListasPessoaFisicaQuintoDiaComponent {

  listadepresenca: any [] = []

 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }
  
  ngOnInit(): void {
    //capturando o id enviado na URL
    var id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://localhost:8082/api/matriculas/' + id)
      .subscribe({
        next: (data: any) => {
          // Certifique-se de que 'certificado' seja uma matriz
          this.listadepresenca = Array.isArray(data) ? data : [data];
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  printPage() {
    window.print();
  }
}

