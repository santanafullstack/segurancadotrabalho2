import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CadastrarCurso } from 'src/app/models/cadastrar-curso.model';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-consultar-cursos',
  templateUrl: './consultar-cursos.component.html',
  styleUrls: ['./consultar-cursos.component.css']
})
export class ConsultarCursosComponent implements OnInit {
 
  cursos: any [] = []
  arquivoMsgErro: string = '';
  pagina: number = 1; 
  filtro: any = { curso: '' }; 
  itensPorPagina = 5;
  paginaAtual: number = 1; 
  arquivo: File | null = null;
  incluiravaliacao: File | null = null;
  incluirmaterial: File | null = null;
  incluirgabarito: File | null = null;
  id: string = ''; // Inicialize o id
  mensagem: string = ''
  curso: CadastrarCurso | null = null;
  cursoSelecionado: any = null;
 
    constructor(
      private httpClient: HttpClient,
      private activatedRoute: ActivatedRoute,

    ) {
    }

    exibirCursos(curso: any): void {
      this. cursoSelecionado = curso;
    }

    
    ngOnInit(): void {
      this.httpClient.get('http://localhost:8082/api/cursos'
      )
      .subscribe({ 
        next: (data) => { 
          this.cursos = data as any[];

        },
        error: (e) => { //recebe o retorno de erro da API
          console.log(e);
        }
      });
  
    }


    setCurso(curso: CadastrarCurso): void {
      this.curso = curso;
      this.formIncluirAvaliacao.patchValue(curso);
      this.formIncluirMaterial.patchValue(curso);                              
      this.formIncluirGabarito.patchValue(curso);                              
                              
              }
    
    formIncluirAvaliacao = new FormGroup({
      idcurso: new FormControl<string | null>(''),
      incluiravaliacao: new FormControl<null>(null),
      arquivo: new FormControl<null>(null)
    });

    formIncluirMaterial = new FormGroup({
      idcurso: new FormControl<string | null>(''),
      incluirmaterial: new FormControl<null>(null),
      arquivo: new FormControl<null>(null)
    });

    formIncluirGabarito = new FormGroup({
      idcurso: new FormControl<string | null>(''),
      incluirgabarito: new FormControl<null>(null),
      arquivo: new FormControl<null>(null)
    });
    
    get form(): any {
      return this.formIncluirAvaliacao.controls;
      return this.formIncluirMaterial.controls;
      return this.formIncluirGabarito.controls;

    }


    IncluirAvaliacaoSubmit(): void {
      // Verifica se o id é uma string não vazia
      if (this.id.trim() !== '') {
          console.log('ID antes da requisição:', this.id);
  
          // Cria um objeto FormData e adiciona o ID
          const formData: FormData = new FormData();
          // Certifique-se de usar o nome correto do campo no backend (pode ser 'id' ou 'idcurso')
          formData.append('id', this.id);
  
          // Obtém o arquivo de assinatura do formulário
          const incluiravaliacao = this.formIncluirAvaliacao.get('incluiravaliacao')?.value;
  
          // Verifica se a assinatura está presente
          if (incluiravaliacao) {
              // Adiciona a assinatura ao FormData
              formData.append('avaliacao', incluiravaliacao, 'avaliacao'); // Adiciona o terceiro parâmetro para definir o nome do campo
  
              // Envia a requisição para a API usando o método PUT
              this.httpClient.put('http://localhost:8082/api/cursos/incluir-avaliacao', formData)
                  .subscribe(
                      (data: any) => {
                          // Se a requisição for bem-sucedida, exibe uma mensagem de sucesso e redefina o formulário
                          this.mensagem = `Avaliação inserida com sucesso!`;
                          this.formIncluirAvaliacao.reset();
                      },
                      (error) => {
                          // Se houver um erro, exibe o erro no console
                          console.error('Erro na requisição:', error);
                          // Lógica de tratamento de erro, se necessário
                      }
                  );
          } else {
              console.error("Avaliação não presente. Certifique-se de selecionar um arquivo válido.");
              // Lógica de tratamento de erro, se necessário
          }
      } else {
          console.error("ID da Avaliação não está presente ou é inválido. Certifique-se de que a Avaliação tem um ID válido.");
          // Lógica de tratamento de erro, se necessário
      }
  }


  
  IncluirMaterialSubmit(): void {
    // Verifica se o id é uma string não vazia
    if (this.id.trim() !== '') {
        console.log('ID antes da requisição:', this.id);

        // Cria um objeto FormData e adiciona o ID
        const formData: FormData = new FormData();
        // Certifique-se de usar o nome correto do campo no backend (pode ser 'id' ou 'idcurso')
        formData.append('id', this.id);

        // Obtém o arquivo de assinatura do formulário
        const incluirmaterial = this.formIncluirMaterial.get('incluirmaterial')?.value;

        // Verifica se a assinatura está presente
        if (incluirmaterial) {
            // Adiciona a assinatura ao FormData
            formData.append('material', incluirmaterial, 'material'); // Adiciona o terceiro parâmetro para definir o nome do campo

            // Envia a requisição para a API usando o método PUT
            this.httpClient.put('http://localhost:8082/api/cursos/incluir-material', formData)
                .subscribe(
                    (data: any) => {
                        // Se a requisição for bem-sucedida, exibe uma mensagem de sucesso e redefina o formulário
                        this.mensagem = `Material inserido com sucesso!`;
                        this.formIncluirMaterial.reset();
                    },
                    (error) => {
                        // Se houver um erro, exibe o erro no console
                        console.error('Erro na requisição:', error);
                        // Lógica de tratamento de erro, se necessário
                    }
                );
        } else {
            console.error("Material não presente. Certifique-se de selecionar um arquivo válido.");
            // Lógica de tratamento de erro, se necessário
        }
    } else {
        console.error("ID do Material não está presente ou é inválido. Certifique-se de que a Avaliação tem um ID válido.");
        // Lógica de tratamento de erro, se necessário
    }
}



IncluirGabaritoSubmit(): void {
  // Verifica se o id é uma string não vazia
  if (this.id.trim() !== '') {
      console.log('ID antes da requisição:', this.id);

      // Cria um objeto FormData e adiciona o ID
      const formData: FormData = new FormData();
      // Certifique-se de usar o nome correto do campo no backend (pode ser 'id' ou 'idcurso')
      formData.append('id', this.id);

      // Obtém o arquivo de assinatura do formulário
      const incluirgabarito = this.formIncluirGabarito.get('incluirgabarito')?.value;

      // Verifica se a assinatura está presente
      if (incluirgabarito) {
          // Adiciona a assinatura ao FormData
          formData.append('gabarito', incluirgabarito, 'gabarito'); // Adiciona o terceiro parâmetro para definir o nome do campo

          // Envia a requisição para a API usando o método PUT
          this.httpClient.put('http://localhost:8082/api/cursos/incluir-gabarito', formData)
              .subscribe(
                  (data: any) => {
                      // Se a requisição for bem-sucedida, exibe uma mensagem de sucesso e redefina o formulário
                      this.mensagem = ` Gabarito inserido com sucesso!`;
                      this.formIncluirGabarito.reset();
                  },
                  (error) => {
                      // Se houver um erro, exibe o erro no console
                      console.error('Erro na requisição:', error);
                      // Lógica de tratamento de erro, se necessário
                  }
              );
      } else {
          console.error("Avaliação não presente. Certifique-se de selecionar um arquivo válido.");
          // Lógica de tratamento de erro, se necessário
      }
  } else {
      console.error("ID da Avaliação não está presente ou é inválido. Certifique-se de que a Avaliação tem um ID válido.");
      // Lógica de tratamento de erro, se necessário
  }
}
  
  
    

  onFileChange(event: any) {
    // Capturar o arquivo selecionado
    const file = event.target.files[0];
    // Verificar se algum arquivo foi selecionado
    if (file) {
      console.log(file);
      
      // Verificar se o arquivo é uma imagem ou um PDF
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        if (file.size <= 1024 * 1024) {
          // Fazer a captura do arquivo
          this.formIncluirAvaliacao.controls['incluiravaliacao'].setValue(file);
          this.arquivoMsgErro = '';
        } else {
          // Gerar erro
          this.formIncluirAvaliacao.controls['incluiravaliacao'].setValue(null);
          this.arquivoMsgErro = 'Envie um arquivo com até 1MB de tamanho.';
        }
      } else {
        // Gerar erro
        this.formIncluirAvaliacao.controls['incluiravaliacao'].setValue(null);
        this.arquivoMsgErro = 'Selecione somente imagens (JPG, PNG, BMP, GIF) ou arquivos PDF.';
      }
    }
  }


  
  onFileChange1(event: any) {
    // Capturar o arquivo selecionado
    const file = event.target.files[0];
    // Verificar se algum arquivo foi selecionado
    if (file) {
      console.log(file);
      
      // Verificar se o arquivo é uma imagem ou um PDF
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        const maxSizeBytes = 5 * 1024 * 1024; // Novo limite: 5 megabytes
  
        if (file.size <= maxSizeBytes) {
          // Fazer a captura do arquivo
          this.formIncluirMaterial.controls['incluirmaterial'].setValue(file);
          this.arquivoMsgErro = '';
        } else {
          // Gerar erro
          this.formIncluirMaterial.controls['incluirmaterial'].setValue(null);
          this.arquivoMsgErro = 'Envie um arquivo com até 5MB de tamanho.';
        }
      } else {
        // Gerar erro
        this.formIncluirMaterial.controls['incluirmaterial'].setValue(null);
        this.arquivoMsgErro = 'Selecione somente imagens (JPG, PNG, BMP, GIF) ou arquivos PDF.';
      }
    }
  }
  

  onFileChange2(event: any) {
    // Capturar o arquivo selecionado
    const file = event.target.files[0];
    // Verificar se algum arquivo foi selecionado
    if (file) {
      console.log(file);
      
      // Verificar se o arquivo é uma imagem ou um PDF
      if (file.type.startsWith('image/') || file.type === 'application/pdf') {
        if (file.size <= 1024 * 1024) {
          // Fazer a captura do arquivo
          this.formIncluirGabarito.controls['incluirgabarito'].setValue(file);
          this.arquivoMsgErro = '';
        } else {
          // Gerar erro
          this.formIncluirGabarito.controls['incluirgabarito'].setValue(null);
          this.arquivoMsgErro = 'Envie um arquivo com até 1MB de tamanho.';
        }
      } else {
        // Gerar erro
        this.formIncluirGabarito.controls['incluirgabarito'].setValue(null);
        this.arquivoMsgErro = 'Selecione somente imagens (JPG, PNG, BMP, GIF) ou arquivos PDF.';
      }
    }
  }

  


    onDelete(idcurso: number, curso: string): void {
      if(window.confirm('Deseja realmente excluir o Endereco selecionado?\n' + curso)) {
        //enviando uma reqquisição para o serviço de exclusão da API
        this.httpClient.delete('http://localhost:8082/api/cursos/' + idcurso)
          .subscribe({
            next: (data: any) => {
              this.ngOnInit();
            },
            error: (e) => {
            }
          })
      }
    }


    downloadMaterial(curso: any) {
      if (curso && curso.idcurso ) {
        const material = curso.idcurso;
    
        // Make a request to the server to get the proficiency file
        this.httpClient.get(`http://localhost:8082/api/cursos/download-material/${material}`, {
          responseType: 'arraybuffer' as 'json' // Specify that the response is binary data
        }).subscribe(
          (data: any) => {
            this.downloadFile(data, `apostila-do-curso_${material}.pdf`);
          },
          (error) => {
            console.error(error);
            // Handle the error, e.g., show an error message to the user
          }
        );
      }
    }


    
    downloadAvaliacao(curso: any) {
      if (curso && curso.idcurso ) {
        const avaliacao = curso.idcurso;
    
        // Make a request to the server to get the proficiency file
        this.httpClient.get(`http://localhost:8082/api/cursos/download-avaliacao/${avaliacao}`, {
          responseType: 'arraybuffer' as 'json' // Specify that the response is binary data
        }).subscribe(
          (data: any) => {
            this.downloadFile(data, `avaliaçao_${avaliacao}.pdf`);
          },
          (error) => {
            console.error(error);
            // Handle the error, e.g., show an error message to the user
          }
        );
      }
    }

    
    downloadGabarito(curso: any) {
      if (curso && curso.idcurso ) {
        const gabarito = curso.idcurso;
    
        // Make a request to the server to get the proficiency file
        this.httpClient.get(`http://localhost:8082/api/cursos/download-gabarito/${gabarito}`, {
          responseType: 'arraybuffer' as 'json' // Specify that the response is binary data
        }).subscribe(
          (data: any) => {
            this.downloadFile(data, `gabarito-da-avaliação_${gabarito}.pdf`);
          },
          (error) => {
            console.error(error);
            // Handle the error, e.g., show an error message to the user
          }
        );
      }
    }

    private downloadFile(data: any, fileName: string) {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
    
      // Trigger the file download
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      link.click();
    
      // Clean up
      window.URL.revokeObjectURL(url);
    }
    
}
