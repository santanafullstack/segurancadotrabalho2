import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
import { CadastrarTurmas } from 'src/app/models/cadastrar-turmas.model';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FilterPipe } from 'ngx-filter-pipe';


@Component({
  selector: 'app-consulta-de-turmas',
  templateUrl: './consulta-de-turmas.component.html',
  styleUrls: ['./consulta-de-turmas.component.css']
})
export class ConsultaDeTurmasComponent implements AfterViewInit, OnInit {

  @ViewChild('content') popupview!: ElementRef;

  mensagem: string = '';
  turmaSelecionada: any = null;
  instrutores: any[] = [];
  turma: CadastrarTurmas | null = null;
  turmas: any[] = [];

  IncluirInstrutor: FormGroup;
  pagina: number = 1; 
  filtro: any = { matriculas: '' }; 
  itensPorPagina = 10;
  paginaAtual: number = 1; 
  

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.IncluirInstrutor = new FormGroup({
      idTurmas: new FormControl('', [Validators.required]),
      idinstrutores: new FormArray([], [Validators.required])
    });
  }

  get IncluirInstrutorTurma(): FormArray {
    return this.IncluirInstrutor.get('idinstrutores') as FormArray;
  }

  adicionarInstrutor(): void {
    this.IncluirInstrutorTurma.push(new FormGroup({
      idTurmas: new FormControl('', [Validators.required]),
      idinstrutores: new FormArray([], [Validators.required])
    }));
  }

  removerInstrutor(index: number): void {
    this.IncluirInstrutorTurma.removeAt(index);
  }

  removerUltimoInstrutor(): void {
    this.IncluirInstrutorTurma.removeAt(this.IncluirInstrutorTurma.length - 1);
  }

  addIdInstrutor(event: any): void {
    if (event) {
      const selectedValue = event.target.value;
      const control = new FormControl(selectedValue);
      (this.IncluirInstrutor.get('idinstrutores') as FormArray).push(control);
    }
  }

  ngAfterViewInit(): void {
    $(document).ready(() => {
      this.inicializarDataTable();

      $(this.popupview.nativeElement).on('shown.bs.modal', () => {
        this.inicializarDataTable();
      });
    });
  }

  private inicializarDataTable(): void {
    const table = $('#consulta_empresas').DataTable({
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.6/i18n/Portuguese-Brasil.json'
      }
    });
  }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8085/api/turmas/consultar-todas-turmas').subscribe({
      next: (data) => {
        this.turmas = data as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });


    this.httpClient.get('http://localhost:8082/api/instrutor').subscribe({
      next: (data) => {
        this.instrutores = data as any[];
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  onDelete(idTurmas: number, numeroTurma: string): void {
    const confirmDelete = window.confirm(`Deseja realmente excluir o Contato selecionado?\n${numeroTurma}`);
    if (confirmDelete) {
      this.httpClient.delete(`http://localhost:8081/api/turmas/${idTurmas}`).subscribe({
        next: () => {
          this.ngOnInit();
        },
        error: (e) => {
          console.error(e);
        }
      });
    }
  }

  setTurma(turma: CadastrarTurmas): void {
    this.turma = turma;
    this.IncluirInstrutor.patchValue(turma);
  }

  exibirMatriculas(turma: any): void {
    this.turmaSelecionada = turma;
    setTimeout(() => {
      this.inicializarDataTable();
    }, 100);
  }

  exibirInstrutores(turmas: any): void {
    this.turmaSelecionada = turmas;
  }

  get form(): any {
    return this.IncluirInstrutor.controls;
  }

  IncluirInstrutorSubmit(): void {
    const idTurmas = this.form.idTurmas.value;
    const idinstrutores = this.form.idinstrutores.value;

    const data = {
      idTurmas: idTurmas,
      idinstrutores: idinstrutores
    };

    this.httpClient.put('http://localhost:8082/api/turmas/{incluir-instrutor}', data).subscribe({
      next: () => {
        this.mensagem = 'Instrutores cadastrados com sucesso!';
      },
      error: (e) => {
        console.error(e.error);
      }
    });
  }

  excluirInstrutor(idTurmas: string, idInstrutor: string): void {
    const confirmDelete = window.confirm(`Deseja realmente excluir o Instrutor selecionado?\n${idInstrutor}`);
    if (confirmDelete) {
      const url = `http://localhost:8082/api/turmas/${idTurmas}/instrutores/${idInstrutor}`;
      this.httpClient.delete(url).subscribe({
        next: (data: any) => {
          this.ngOnInit();
        },
        error: (e) => {
          console.error(e);
        }
      });
    }
  }
}
