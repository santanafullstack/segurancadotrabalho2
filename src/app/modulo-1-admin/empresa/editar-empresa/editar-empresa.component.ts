import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {
  mensagem: string = '';

  contatos: any [] = []

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    //capturando o id enviado na URL
    var idEmpresa = this.activatedRoute.snapshot.paramMap.get('id') as string;
    //consultando o produto através do id
    this.httpClient.get('http://localhost:8081/api/empresa/' + idEmpresa)
      .subscribe({
        next: (data: any) => {
          //preencher o formulário com os dados do produto obtido
          this.formEdicao.patchValue(data);
        },
        error: (e) => {
          console.log(e);
        }
      })

  }

 

formEdicao = new FormGroup({
  idEmpresa: new FormControl('', [Validators.required]),
  razaosocial: new FormControl('', [Validators.required]),
  nomefantasia: new FormControl('', [Validators.required]),
  cnpj: new FormControl('', [Validators.required]),
  status: new FormControl('', [Validators.required]),


    });

      get form(): any {
        return this.formEdicao.controls;
      }

      onSubmit(): void {
        //enviando uma requisição PUT para a api
        this.httpClient.put('http://localhost:8081/api/empresa', this.formEdicao.value)

          .subscribe({
            next: (data: any) => {
              this.mensagem = `Empresa Atualizada com sucesso!`;

            },
            error: (e) => {
            }
          });
      }

}
