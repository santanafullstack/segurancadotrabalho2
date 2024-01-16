import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent {

  mensagem: string = '';
  mensagemErro: string = '';

  //construtor
  constructor(
   private httpClient: HttpClient,
 ) {}


 formEmpresa = new FormGroup({
   razaosocial: new FormControl('', [Validators.required]),
   nomefantasia: new FormControl('', [Validators.required]),
   cnpj: new FormControl('', [Validators.required]),
   status: new FormControl('', [Validators.required]),
     });

     get form(): any {
       return this.formEmpresa.controls;
     }


     onSubmit(): void {
      this.httpClient
        .post('http://localhost:8081/api/empresa', this.formEmpresa.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Empresa cadastrada com sucesso!`;
          },
          error: (e) => {
            console.log(e.error);
            // Verifique se a resposta da API contém uma mensagem de erro
            if (e.error && e.error.message) {
              this.mensagemErro = e.error.message;
            } else {
              this.mensagemErro = 'Erro desconhecido ao cadastrar a empresa.';
            }
          }
        });
    }
    

printPage() {
  window.print();
}

generatePDF() {
  const pdfGenerationUrl = 'http://localhost:8081/api/gerar-pdf';

  // Realize uma chamada HTTP para o serviço de back-end para gerar o PDF
  this.httpClient.post(pdfGenerationUrl, {}, { responseType: 'blob' }).subscribe(
    (response: Blob) => {
      // A resposta é um blob (binário) que representa o PDF

      // Crie um objeto URL temporário para o blob
      const blobUrl = URL.createObjectURL(response);

      // Crie um elemento <a> para o download do PDF
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = 'output.pdf'; // Nome do arquivo PDF
      document.body.appendChild(downloadLink);
  // Simule o clique no link para iniciar o download
  downloadLink.click();

  // Libere o objeto URL
  URL.revokeObjectURL(blobUrl);
},
(error) => {
  console.log(error);
}
);
}
}


