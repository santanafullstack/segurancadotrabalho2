import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
import 'select2'; // Adicione esta importação
import { NgSelectConfig } from '@ng-select/ng-select';
@Component({
  selector: 'app-cadastrar-turmas',
  templateUrl: './cadastrar-turmas.component.html',
  styleUrls: ['./cadastrar-turmas.component.css']
})
export class CadastrarTurmasComponent implements OnInit {

  @ViewChild('planoSelect') planoSelect!: ElementRef;



  mensagem: string = '';
  formTurmas: FormGroup;
  cursos: any [] = []
  unidades: any [] = []


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


  constructor(
    private httpClient: HttpClient,
     private formBuilder: FormBuilder,
     private config: NgSelectConfig

     ) {
    this.formTurmas = this.formBuilder.group({
      idCurso: ['', [Validators.required]],
      idUnidadeDeTreinamento: ['', [Validators.required]],
      datainicio: ['', [Validators.required]],
      datafim: ['', [Validators.required]],
      validadedocurso: ['', [Validators.required]],
      cargahoraria: ['', Validators.required],
      modalidade: ['', Validators.required],
      status: ['', Validators.required],
      descricao: ['', Validators.required],
      diasespecificos: ['', Validators.required],
      tipo: ['', Validators.required],
      nivel: ['', Validators.required],
      validade: ['', Validators.required],
      dia: ['', Validators.required],
      mes: ['', Validators.required],
      ano: ['', Validators.required],
      primeirodia: ['', Validators.required],
      segundodia: ['', Validators.required],
      terceirodia: ['', Validators.required],
      quartodia: ['', Validators.required],
      quintodia: ['', Validators.required],
    });

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
        this.formTurmas.get('idCurso')?.setValue(selectedValue);
        this.formTurmas.get('idCurso')?.updateValueAndValidity();
      });
  
      const lastOptionValue = this.cursos.length > 0 ? this.cursos[this.cursos.length - 1].idcurso : '';
  
      selectElement.next().find('.select2-selection').addClass('form-control');
      selectElement.next().find('.select2-selection__arrow').addClass('btn btn-outline-secondary');
  
      selectElement.val(lastOptionValue).trigger('change');
    }
  }
  

  get formControls(): any {
    return this.formTurmas.controls;
  }
  onSubmit(): void {
    if (this.formTurmas.valid) {
      // Formate as datas para o formato ISO 8601
      const dataInicio = this.formatDate(this.formTurmas.value.datainicio);
      const dataFim = this.formatDate(this.formTurmas.value.datafim);
  
      // Atualize as datas no objeto do formulário
      this.formTurmas.patchValue({
        datainicio: dataInicio,
        datafim: dataFim
      });
  
      // Enviar o formulário para o endpoint
      this.httpClient
        .post('http://localhost:8082/api/turmas', this.formTurmas.value)
        .subscribe({
          next: (data: any) => {
            this.mensagem = `Turma cadastrada com sucesso!`;
            // Limpar o formulário ou realizar ações adicionais, se necessário
            this.formTurmas.reset();
          },
          error: (e) => {
            console.log(e.error);
            // Realizar ações de tratamento de erro, se necessário
          }
        });
    } else {
      // Realize alguma ação ou exiba uma mensagem de erro se o formulário for inválido
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

  descricaoOptions = [
    { value: 'Selecione a Descrição da Turmas' },
    { value: 'Disposições Gerais' },
    { value: 'Comissão Interna de Prevenção de Acidentes' },
    { value: 'EPI - Equipamento de Proteção Individual e EPC - Equipamento de Proteção Coletiva' },
    { value: 'Primeiros Socorros' },
    { value: 'Segurança em Instalações Elétricas' },
    { value: 'Sistema Elétrico de Potência' },
    { value: 'Transporte, Movimentação, Armazenagem e Manuseio de Materiais' },
    { value: 'Segurança no Trabalho em Máquinas e Equipamentos' },
    { value: 'Caldeiras, Vasos de Pressão, Tubulações e Tanques Metálicos de Armazenamento' },
    { value: 'Atividades e Operações Insalubres' },
    { value: 'Atividades e Operações Perigosas' },
    { value: 'Ergonomia' },
    { value: 'Segurança e Saúde no Trabalho na Indústria da Construção' },
    { value: 'Atmosferas Explosivas' },
    { value: 'Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis' },
    { value: 'Proteção contra Incêndios' },
    { value: 'Sinalização de Segurança' },
    { value: 'Segurança e Saúde no Trabalho Aquaviário' },
    { value: 'Segurança e Saúde no Trabalho na Agricultura, Pecuária, Silvicultura, Exploração Florestal e Aquicultura' },
    { value: 'Segurança e Saúde no Trabalho em Serviços de Saúde' },
    { value: 'Segurança e Saúde no Trabalho em Espaços Confinados' },
    { value: 'Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval' },
    { value: 'Segurança em Trabalhos em Altura' },
    { value: 'Segurança e Saúde no Trabalho em Empresas de Abate e Processamento de Carnes e Derivados' },
    { value: 'Segurança e Saúde em Plataformas de Petróleo' },
    { value: 'Atividades de Limpeza Urbana e Manejo de Resíduos Sólidos' }
  ];

  CargaHoraria = [

    { value: 'Seleciona a Carga Horária' },
    { value: '1 Hora' },
    { value: '2 Horas' },
    { value: '4 Horas' },
    { value: '6 Horas' },
    { value: '8 Horas' },
    { value: '10 Horas' },
    { value: '12 Horas' },
    { value: '16 Horas' },
    { value: '20 Horas' },
    { value: '24 Horas' },
    { value: '32 Horas' },
    { value: '40 Horas' }
  ];
  
  // No seu componente TypeScript
diasOptions = [
  { value: 'Dia' },
  { value: '01' },
  { value: '02' },
  { value: '03' },
  { value: '04' },
  { value: '05' },
  { value: '06' },
  { value: '07' },
  { value: '08' },
  { value: '09' },
  { value: '10' },
  { value: '11' },
  { value: '12' },
  { value: '13' },
  { value: '14' },
  { value: '15' },
  { value: '16' },
  { value: '17' },
  { value: '18' },
  { value: '19' },
  { value: '20' },
  { value: '21' },
  { value: '22' },
  { value: '23' },
  { value: '24' },
  { value: '25' },
  { value: '26' },
  { value: '27' },
  { value: '28' },
  { value: '29' },
  { value: '30' },
  { value: '31' }
];

mesOptions = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];
anoOptions = Array.from({ length: 100 }, (_, index) => String(2022 + index));

}  