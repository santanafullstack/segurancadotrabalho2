import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSearchPipeModule } from 'ngx-search-pipe'; 
import { Routes, RouterModule } from '@angular/router';
import { PasswordAdminComponent } from './modulo-1-admin/usuario-admin/password-admin/password-admin.component';
import { LoginAdminComponent } from './modulo-1-admin/usuario-admin/login-admin/login-admin.component';
import { AppComponent } from './app.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {DataTablesModule} from 'angular-datatables'
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './modulo-1-admin/dashboard/dashboard.component';
import { CadastrarEmpresaComponent } from './modulo-1-admin/empresa/cadastrar-empresa/cadastrar-empresa.component';
import { ConsultarEmpresaComponent } from './modulo-1-admin/empresa/consultar-empresa/consultar-empresa.component';
import { EditarEmpresaComponent } from './modulo-1-admin/empresa/editar-empresa/editar-empresa.component';
import { CadastrarFuncionarioComponent } from './modulo-1-admin/empresa/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ConsultarFuncionarioComponent } from './modulo-1-admin/empresa/funcionario/consultar-funcionario/consultar-funcionario.component';
import { EditarFuncionarioComponent } from './modulo-1-admin/empresa/funcionario/editar-funcionario/editar-funcionario.component';
import { CadastrarTurmasComponent } from './modulo-1-admin/turmas/cadastrar-turmas/cadastrar-turmas.component';
import { EditarTurmasComponent } from './modulo-1-admin/turmas/editar-turmas/editar-turmas.component';
import { CadastrarInstrutorComponent } from './modulo-1-admin/instrutor/cadastrar-instrutor/cadastrar-instrutor.component';
import { ConsultarInstrutorComponent } from './modulo-1-admin/instrutor/consultar-instrutor/consultar-instrutor.component';
import { EditarInstrutorComponent } from './modulo-1-admin/instrutor/editar-instrutor/editar-instrutor.component';
import { CadastrarEspecializacaoComponent } from './modulo-1-admin/instrutor/especializacao/cadastrar-especializacao/cadastrar-especializacao.component';
import { ConsultarEspecializacaoComponent } from './modulo-1-admin/instrutor/especializacao/consultar-especializacao/consultar-especializacao.component';
import { EditarEspecializacaoComponent } from './modulo-1-admin/instrutor/especializacao/editar-especializacao/editar-especializacao.component';
import { ConsultarEnderecoComponent } from './modulo-1-admin/endereco/consultar-endereco/consultar-endereco.component';
import { CadastrarEnderecoComponent } from './modulo-1-admin/endereco/cadastrar-endereco/cadastrar-endereco.component';
import { EditarEnderecoComponent } from './modulo-1-admin/endereco/editar-endereco/editar-endereco.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadepresencaComponent } from './modulo-1-admin/turmas/listadepresenca/listadepresenca.component';
import { ConsultarCertificadoAlunosComponent } from './modulo-1-admin/certificado/consultar-certificado-alunos/consultar-certificado-alunos.component';
import { GerarAutorizacaoComponent } from './modulo-1-admin/certificado/autorizacao/gerar-autorizacao/gerar-autorizacao.component';
import { CadastrarUnidadeComponent } from './modulo-1-admin/turmas/unidade/cadastrar-unidade/cadastrar-unidade.component';
import { ConsultarUnidadeComponent } from './modulo-1-admin/turmas/unidade/consultar-unidade/consultar-unidade.component';
import { EditarUnidadeComponent } from './modulo-1-admin/turmas/unidade/editar-unidade/editar-unidade.component';
import { CadastrarFuncaoComponent } from './modulo-1-admin/empresa/funcionario/funcao/cadastrar-funcao/cadastrar-funcao.component';
import { ConsultarFuncaoComponent } from './modulo-1-admin/empresa/funcionario/funcao/consultar-funcao/consultar-funcao.component';
import { EditarFuncaoComponent } from './modulo-1-admin/empresa/funcionario/funcao/editar-funcao/editar-funcao.component';
import { CriarChamadoComponent } from './modulo-1-admin/comercial/chamados/criar-chamado/criar-chamado.component';
import { EditarChamadoComponent } from './modulo-1-admin/comercial/chamados/editar-chamado/editar-chamado.component';
import { ConsultarChamadoComponent } from './modulo-1-admin/comercial/chamados/consultar-chamado/consultar-chamado.component';
import { ConsultarTurmasAdmComponent } from './modulo-1-admin/turmas/adm/consultar-turmas-adm/consultar-turmas-adm.component';
import { CadastrarContratoComponent } from './modulo-1-admin/empresa/contrato/cadastrar-contrato/cadastrar-contrato.component';
import { ConsultarContratoComponent } from './modulo-1-admin/empresa/contrato/consultar-contrato/consultar-contrato.component';
import { EditarContratoComponent } from './modulo-1-admin/empresa/contrato/editar-contrato/editar-contrato.component';
import { CadastrarPedidoDeComprasComponent } from './modulo-1-admin/empresa/contrato/pedido-de-compras/cadastrar-pedido-de-compras/cadastrar-pedido-de-compras.component';
import { ConsultarPedidoDeComprasComponent } from './modulo-1-admin/empresa/contrato/pedido-de-compras/consultar-pedido-de-compras/consultar-pedido-de-compras.component';
import { EditarPedidoDeComprasComponent } from './modulo-1-admin/empresa/contrato/pedido-de-compras/editar-pedido-de-compras/editar-pedido-de-compras.component';
import { ConsultarContatosComponent } from './modulo-1-admin/empresa/consultar-contatos/consultar-contatos.component';
import { ConsultarCursosComponent } from './modulo-1-admin/turmas/cursos/consultar-cursos/consultar-cursos.component';
import { CadastrarCursoComponent } from './modulo-1-admin/turmas/cursos/cadastrar-curso/cadastrar-curso.component';
import { EditarCursoComponent } from './modulo-1-admin/turmas/cursos/editar-curso/editar-curso.component';
import { CriarProficienciaComponent } from './modulo-1-admin/instrutor/proficiencia/criar-proficiencia/criar-proficiencia.component';
import { EditarProficienciaComponent } from './modulo-1-admin/instrutor/proficiencia/editar-proficiencia/editar-proficiencia.component';
import { ConsultarProficienciaComponent } from './modulo-1-admin/instrutor/proficiencia/consultar-proficiencia/consultar-proficiencia.component';
import { ConsultarTurmasComponent } from './modulo-1-admin/turmas/consultar-turmas/consultar-turmas.component';
import { CadastrarPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/cadastrar-pedidos-de-compras/cadastrar-pedidos-de-compras.component';
import { EditarPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/editar-pedidos-de-compras/editar-pedidos-de-compras.component';
import { ConsultarPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/consultar-pedidos-de-compras/consultar-pedidos-de-compras.component';
import { CadastrarFaturamentoPjComponent } from './modulo-1-admin/financeiro/faturamento-pj/cadastrar-faturamento-pj/cadastrar-faturamento-pj.component';
import { EditarFaturamentoPjComponent } from './modulo-1-admin/financeiro/faturamento-pj/editar-faturamento-pj/editar-faturamento-pj.component';
import { ConsultarFaturamentoPjComponent } from './modulo-1-admin/financeiro/faturamento-pj/consultar-faturamento-pj/consultar-faturamento-pj.component';
import { CadastrarFaturamentoPfComponent } from './modulo-1-admin/financeiro/faturamento-pf/cadastrar-faturamento-pf/cadastrar-faturamento-pf.component';
import { EditarFaturamentoPfComponent } from './modulo-1-admin/financeiro/faturamento-pf/editar-faturamento-pf/editar-faturamento-pf.component';
import { ConsultarFaturamentoPfComponent } from './modulo-1-admin/financeiro/faturamento-pf/consultar-faturamento-pf/consultar-faturamento-pf.component';
import { CadastrarPessoaFisicaComponent } from './modulo-1-admin/pessoa-fisica/cadastrar-pessoa-fisica/cadastrar-pessoa-fisica.component';
import { EditarPessoaFisicaComponent } from './modulo-1-admin/pessoa-fisica/editar-pessoa-fisica/editar-pessoa-fisica.component';
import { ConsultarPessoaFisicaComponent } from './modulo-1-admin/pessoa-fisica/consultar-pessoa-fisica/consultar-pessoa-fisica.component';
import { CriarMatriculasFaturamentoPfComponent } from './modulo-1-admin/turmas/matricula/faturamento-pf/criar-matriculas-faturamento-pf/criar-matriculas-faturamento-pf.component';
import { ConsultarMatriculasFaturamentoPfComponent } from './modulo-1-admin/turmas/matricula/faturamento-pf/consultar-matriculas-faturamento-pf/consultar-matriculas-faturamento-pf.component';
import { CriarMatriculasFaturamentoPjComponent } from './modulo-1-admin/turmas/matricula/faturamento-pj/criar-matriculas-faturamento-pj/criar-matriculas-faturamento-pj.component';
import { ConsultarMatriculasFaturamentoPjComponent } from './modulo-1-admin/turmas/matricula/faturamento-pj/consultar-matriculas-faturamento-pj/consultar-matriculas-faturamento-pj.component';
import { CriarMatriculasPedidosComponent } from './modulo-1-admin/turmas/matricula/pedidos/criar-matriculas-pedidos/criar-matriculas-pedidos.component';
import { ConsultarMatriculasPedidosComponent } from './modulo-1-admin/turmas/matricula/pedidos/consultar-matriculas-pedidos/consultar-matriculas-pedidos.component';
import { GerarAutorizacaoPessoafisicaComponent } from './modulo-1-admin/certificado/pessoafisica/gerar-autorizacao-pessoafisica/gerar-autorizacao-pessoafisica.component';
import { GerarCertificadoPessoafisicaComponent } from './modulo-1-admin/certificado/pessoafisica/gerar-certificado-pessoafisica/gerar-certificado-pessoafisica.component';
import { GerarListaDePresencaPessoafisicaComponent } from './modulo-1-admin/certificado/pessoafisica/gerar-lista-de-presenca-pessoafisica/gerar-lista-de-presenca-pessoafisica.component';
import { MatriculasPessoaFisicaGerarDocumentosComponent } from './modulo-1-admin/certificado/matriculas/matriculas-pessoa-fisica-gerar-documentos/matriculas-pessoa-fisica-gerar-documentos.component';
import { MatriculasPessoaJuridicaGerarDocumentosComponent } from './modulo-1-admin/certificado/matriculas/matriculas-pessoa-juridica-gerar-documentos/matriculas-pessoa-juridica-gerar-documentos.component';
import { ListasPessoaFisicaPrimeiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-primeiro-dia/listas-pessoa-fisica-primeiro-dia.component';
import { ListasPessoaFisicaSegundoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-segundo-dia/listas-pessoa-fisica-segundo-dia.component';
import { ListasPessoaFisicaTerceiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-terceiro-dia/listas-pessoa-fisica-terceiro-dia.component';
import { ListasPessoaFisicaQuartoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quarto-dia/listas-pessoa-fisica-quarto-dia.component';
import { ListasPessoaJuridicaPrimeiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-primeiro-dia/listas-pessoa-juridica-primeiro-dia.component';
import { ListasPessoaJuridicaSegundoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-segundo-dia/listas-pessoa-juridica-segundo-dia.component';
import { ListasPessoaJuridicaTerceiroDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-terceiro-dia/listas-pessoa-juridica-terceiro-dia.component';
import { ListasPessoaJuridicaQuartoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quarto-dia/listas-pessoa-juridica-quarto-dia.component';
import { ListasPessoaJuridicaQuintoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-juridica/listas-pessoa-juridica-quinto-dia/listas-pessoa-juridica-quinto-dia.component';
import { ListasPessoaFisicaQuintoDiaComponent } from './modulo-1-admin/certificado/listas-pessoa-fisica/listas-pessoa-fisica-quinto-dia/listas-pessoa-fisica-quinto-dia.component';
import { GerarRelatorioPessoaFisicaComponent } from './modulo-1-admin/financeiro/faturamento-pf/gerar-relatorio-pessoa-fisica/gerar-relatorio-pessoa-fisica.component';
import { GerarRelatorioPessoaJuridicaComponent } from './modulo-1-admin/financeiro/faturamento-pj/gerar-relatorio-pessoa-juridica/gerar-relatorio-pessoa-juridica.component';
import { GerarRelatorioPedidosDeComprasComponent } from './modulo-1-admin/financeiro/pedidos-de-compras/gerar-relatorio-pedidos-de-compras/gerar-relatorio-pedidos-de-compras.component';
import { RegisterAdminComponent } from './modulo-1-admin/usuario-admin/register-admin/register-admin.component';
import { PerfilEmpresaComponent } from './perfil/perfil-empresa/perfil-empresa.component';
import { PerfilAlunoComponent } from './perfil/perfil-aluno/perfil-aluno.component';
import { PerfilMasterComponent } from './perfil/perfil-master/perfil-master.component';
import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
import { ConsultarMatriculasEmpresaComponent } from './perfil/perfil-empresa/matriculas-empresa/consultar-matriculas-empresa/consultar-matriculas-empresa.component';
import { ConsultarMatriculasAlunoComponent } from './perfil/perfil-aluno/matriculas-aluno/consultar-matriculas-aluno/consultar-matriculas-aluno.component';
import { GerarCertificadoPerfilEmpresaComponent } from './perfil/perfil-empresa/matriculas-empresa/gerar-certificado-perfil-empresa/gerar-certificado-perfil-empresa.component';
import { GerarAutorizacaoPerfilEmpresaComponent } from './perfil/perfil-empresa/matriculas-empresa/gerar-autorizacao-perfil-empresa/gerar-autorizacao-perfil-empresa.component';
import { ListaDePresencaPrimeiroDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-primeiro-dia/lista-de-presenca-primeiro-dia.component';
import { ListaDePresencaSegundoDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-segundo-dia/lista-de-presenca-segundo-dia.component';
import { ListaDePresencaTerceiroDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-terceiro-dia/lista-de-presenca-terceiro-dia.component';
import { ListaDePresencaQuartoDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-quarto-dia/lista-de-presenca-quarto-dia.component';
import { ListaDePresencaQuintoDiaComponent } from './perfil/perfil-empresa/matriculas-empresa/listas-de-presenca/lista-de-presenca-quinto-dia/lista-de-presenca-quinto-dia.component';
import { GerarCertificadoPerfilAlunoComponent } from './perfil/perfil-aluno/matriculas-aluno/gerar-certificado-perfil-aluno/gerar-certificado-perfil-aluno.component';
import { GerarAutorizacaoPerfilAlunoComponent } from './perfil/perfil-aluno/matriculas-aluno/gerar-autorizacao-perfil-aluno/gerar-autorizacao-perfil-aluno.component';
import { ListasAlunoParticularPrimeiroDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-primeiro-dia/listas-aluno-particular-primeiro-dia.component';
import { ListasAlunoParticularSegundoDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-segundo-dia/listas-aluno-particular-segundo-dia.component';
import { ListasAlunoParticularTerceiroDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-terceiro-dia/listas-aluno-particular-terceiro-dia.component';
import { ListasAlunoParticularQuartoDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-quarto-dia/listas-aluno-particular-quarto-dia.component';
import { ListasAlunoParticularQuintoDiaComponent } from './perfil/perfil-aluno/matriculas-aluno/listas/listas-aluno-particular-quinto-dia/listas-aluno-particular-quinto-dia.component';
import { EditarMatriculaComponent } from './modulo-1-admin/turmas/matricula/editar-matricula/editar-matricula.component';
import { CriarCobrancaEmpresaFaturamentoComponent } from './modulo-1-admin/financeiro/cobranca/empresa-faturamento/criar-cobranca-empresa-faturamento/criar-cobranca-empresa-faturamento.component';
import { CriarCobrancaEmpresaPedidosComponent } from './modulo-1-admin/financeiro/cobranca/empresa-pedidos/criar-cobranca-empresa-pedidos/criar-cobranca-empresa-pedidos.component';
import { CriarCobrancaPessoaFisicaFaturamentoComponent } from './modulo-1-admin/financeiro/cobranca/pessoa-fisica-faturamento/criar-cobranca-pessoa-fisica-faturamento/criar-cobranca-pessoa-fisica-faturamento.component';
import { ConsultarTurmasPerfilEmpresaComponent } from './perfil/perfil-empresa/turmas/consultar-turmas-perfil-empresa/consultar-turmas-perfil-empresa.component';
import { ConsultarInstrutorPerfilEmpresaComponent } from './perfil/perfil-empresa/instrutor/consultar-instrutor-perfil-empresa/consultar-instrutor-perfil-empresa.component';
import { ConsultarTurmasPerfilAlunoComponent } from './perfil/perfil-aluno/turmas/consultar-turmas-perfil-aluno/consultar-turmas-perfil-aluno.component';
import { ConsultarInstrutorPerfilAlunoComponent } from './perfil/perfil-aluno/instrutor/consultar-instrutor-perfil-aluno/consultar-instrutor-perfil-aluno.component';
import { ConsultarTurmasPorUnidadesComponent } from './modulo-1-admin/turmas/consultar-turmas-por-unidades/consultar-turmas-por-unidades.component';
import { ConsultarEmpresasComponent } from './perfil/perfil-empresa/empresa-cliente/consultar-empresas/consultar-empresas.component';
import { CadastrarFuncionarioPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/cadastrar-funcionario-perfilempresa/cadastrar-funcionario-perfilempresa.component';
import { EditarFuncionarioPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/editar-funcionario-perfilempresa/editar-funcionario-perfilempresa.component';
import { CadastrarFuncaoPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/cadastrar-funcao-perfilempresa/cadastrar-funcao-perfilempresa.component';
import { ConsultarFuncaoPerfilempresaComponent } from './perfil/perfil-empresa/funcionariosempresa/consultar-funcao-perfilempresa/consultar-funcao-perfilempresa.component';
import { TurmasCriarMatriculaPerfilEmpresaComponent } from './perfil/perfil-empresa/turmas-criar-matricula-perfil-empresa/turmas-criar-matricula-perfil-empresa.component';
import { ConsultarFaturamentoPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/consultar-faturamento-perfil-empresa/consultar-faturamento-perfil-empresa.component';
import { GerarRelatorioFaturamentoPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/gerar-relatorio-faturamento-perfil-empresa/gerar-relatorio-faturamento-perfil-empresa.component';
import { PedidosDeComprasPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/pedidos-de-compras-perfil-empresa/pedidos-de-compras-perfil-empresa.component';
import { GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/gerar-relatorios-pedidos-de-compras-perfil-empresa/gerar-relatorios-pedidos-de-compras-perfil-empresa.component';
import { FazerMatriculasPedidosDeComprasPerfilEmpresaComponent } from './perfil/perfil-empresa/financeiro/fazer-matriculas-pedidos-de-compras-perfil-empresa/fazer-matriculas-pedidos-de-compras-perfil-empresa.component';
import { GerarAcessoClienteEmpresaComponent } from './modulo-1-admin/empresa/gerar-acesso-cliente-empresa/gerar-acesso-cliente-empresa.component';
import { GerarAcessoClientePessoafisicaComponent } from './modulo-1-admin/pessoa-fisica/gerar-acesso-cliente-pessoafisica/gerar-acesso-cliente-pessoafisica.component';
import { ConsultarDadosAlunoParticularComponent } from './perfil/perfil-aluno/dados-aluno/consultar-dados-aluno-particular/consultar-dados-aluno-particular.component';
import { ConsultarFaturamentoAlunoComponent } from './perfil/perfil-aluno/dados-aluno/consultar-faturamento-aluno/consultar-faturamento-aluno.component';
import { RelatorioFaturamentoAlunoComponent } from './perfil/perfil-aluno/dados-aluno/relatorio-faturamento-aluno/relatorio-faturamento-aluno.component';
import { CriarMatriculasAlunoParticularComponent } from './perfil/perfil-aluno/dados-aluno/criar-matriculas-aluno-particular/criar-matriculas-aluno-particular.component';
import { EditarMatriculasAlunoParticularComponent } from './perfil/perfil-aluno/dados-aluno/editar-matriculas-aluno-particular/editar-matriculas-aluno-particular.component';
import { GerarCertificadoSemSerAssinadoComponent } from './modulo-1-admin/certificado/gerar-certificado-sem-ser-assinado/gerar-certificado-sem-ser-assinado.component';
import { ConsultarCursosEmpresaComponent } from './perfil/perfil-empresa/consultar-cursos-empresa/consultar-cursos-empresa.component';
import { ConsultarCursosAlunoComponent } from './perfil/perfil-aluno/consultar-cursos-aluno/consultar-cursos-aluno.component';
import { GerarCertificadoSemAssinarPessoaFisicaComponent } from './modulo-1-admin/certificado/gerar-certificado-sem-assinar-pessoa-fisica/gerar-certificado-sem-assinar-pessoa-fisica.component';


@NgModule({
  declarations: [
    RegisterAdminComponent,
    LoginAdminComponent, 
    AppComponent,
    CadastrarEmpresaComponent,
    ConsultarEmpresaComponent,
    EditarEmpresaComponent,
    CadastrarFuncionarioComponent,
    ConsultarFuncionarioComponent,
    EditarFuncionarioComponent,
    CadastrarTurmasComponent,
    EditarTurmasComponent,
 
    CadastrarInstrutorComponent,
    ConsultarInstrutorComponent,
    EditarInstrutorComponent,
    CadastrarEspecializacaoComponent,
    ConsultarEspecializacaoComponent,
    EditarEspecializacaoComponent,
    ConsultarEnderecoComponent,
    CadastrarEnderecoComponent,
    EditarEnderecoComponent,
    NavbarComponent,
    ListadepresencaComponent,
 
    ConsultarCertificadoAlunosComponent,
    GerarAutorizacaoComponent,
    CadastrarUnidadeComponent,
    ConsultarUnidadeComponent,
    EditarUnidadeComponent,
    CadastrarFuncaoComponent,
    ConsultarFuncaoComponent,
    EditarFuncaoComponent,
    CriarChamadoComponent,
    EditarChamadoComponent,
    ConsultarChamadoComponent,
    ConsultarTurmasAdmComponent,
    CadastrarContratoComponent,
    ConsultarContratoComponent,
    EditarContratoComponent,
    CadastrarPedidoDeComprasComponent,
    ConsultarPedidoDeComprasComponent,
    EditarPedidoDeComprasComponent,
    ConsultarContatosComponent,
    ConsultarCursosComponent,
    CadastrarCursoComponent,
    EditarCursoComponent,
    CriarProficienciaComponent,
    EditarProficienciaComponent,
    ConsultarProficienciaComponent,
    ConsultarTurmasComponent,
    CadastrarPedidosDeComprasComponent,
    EditarPedidosDeComprasComponent,
    ConsultarPedidosDeComprasComponent,
    CadastrarFaturamentoPjComponent,
    EditarFaturamentoPjComponent,
    ConsultarFaturamentoPjComponent,
    CadastrarFaturamentoPfComponent,
    EditarFaturamentoPfComponent,
    ConsultarFaturamentoPfComponent,
    CadastrarPessoaFisicaComponent,
    EditarPessoaFisicaComponent,
    ConsultarPessoaFisicaComponent,
    CriarMatriculasFaturamentoPfComponent,
    ConsultarMatriculasFaturamentoPfComponent,
    CriarMatriculasFaturamentoPjComponent,
    ConsultarMatriculasFaturamentoPjComponent,
    CriarMatriculasPedidosComponent,
    ConsultarMatriculasPedidosComponent,
    GerarAutorizacaoPessoafisicaComponent,
    GerarCertificadoPessoafisicaComponent,
    GerarListaDePresencaPessoafisicaComponent,
    MatriculasPessoaFisicaGerarDocumentosComponent,
    MatriculasPessoaJuridicaGerarDocumentosComponent,
    ListasPessoaFisicaPrimeiroDiaComponent,
    ListasPessoaFisicaSegundoDiaComponent,
    ListasPessoaFisicaTerceiroDiaComponent,
    ListasPessoaFisicaQuartoDiaComponent,
    ListasPessoaJuridicaPrimeiroDiaComponent,
    ListasPessoaJuridicaSegundoDiaComponent,
    ListasPessoaJuridicaTerceiroDiaComponent,
    ListasPessoaJuridicaQuartoDiaComponent,
    ListasPessoaJuridicaQuintoDiaComponent,
    ListasPessoaFisicaQuintoDiaComponent,
    GerarRelatorioPessoaFisicaComponent,
    GerarRelatorioPessoaJuridicaComponent,
    GerarRelatorioPedidosDeComprasComponent,
    PerfilEmpresaComponent,
    PerfilAlunoComponent,
    PerfilMasterComponent,
    ConsultarMatriculasEmpresaComponent,
    ConsultarMatriculasAlunoComponent,
    GerarCertificadoPerfilEmpresaComponent,
    GerarAutorizacaoPerfilEmpresaComponent,
    ListaDePresencaPrimeiroDiaComponent,
    ListaDePresencaSegundoDiaComponent,
    ListaDePresencaTerceiroDiaComponent,
    ListaDePresencaQuartoDiaComponent,
    ListaDePresencaQuintoDiaComponent,
    GerarCertificadoPerfilAlunoComponent,
    GerarAutorizacaoPerfilAlunoComponent,
    ListasAlunoParticularPrimeiroDiaComponent,
    ListasAlunoParticularSegundoDiaComponent,
    ListasAlunoParticularTerceiroDiaComponent,
    ListasAlunoParticularQuartoDiaComponent,
    ListasAlunoParticularQuintoDiaComponent,
    EditarMatriculaComponent,
    CriarCobrancaEmpresaFaturamentoComponent,
    CriarCobrancaEmpresaPedidosComponent,
    CriarCobrancaPessoaFisicaFaturamentoComponent,
    ConsultarTurmasPerfilEmpresaComponent,
    ConsultarInstrutorPerfilEmpresaComponent,
    ConsultarTurmasPerfilAlunoComponent,
    ConsultarInstrutorPerfilAlunoComponent,
    ConsultarTurmasPorUnidadesComponent,
    ConsultarEmpresasComponent,
    CadastrarFuncionarioPerfilempresaComponent,
    EditarFuncionarioPerfilempresaComponent,
    CadastrarFuncaoPerfilempresaComponent,

    ConsultarFuncaoPerfilempresaComponent,
     TurmasCriarMatriculaPerfilEmpresaComponent,
     ConsultarFaturamentoPerfilEmpresaComponent,
     GerarRelatorioFaturamentoPerfilEmpresaComponent,
     PedidosDeComprasPerfilEmpresaComponent,
     GerarRelatoriosPedidosDeComprasPerfilEmpresaComponent,
     FazerMatriculasPedidosDeComprasPerfilEmpresaComponent,
     GerarAcessoClienteEmpresaComponent,
     GerarAcessoClientePessoafisicaComponent,
     ConsultarDadosAlunoParticularComponent,
     ConsultarFaturamentoAlunoComponent,
     RelatorioFaturamentoAlunoComponent,
     CriarMatriculasAlunoParticularComponent,
     EditarMatriculasAlunoParticularComponent,
     GerarCertificadoSemSerAssinadoComponent,
     ConsultarCursosEmpresaComponent,
     ConsultarCursosAlunoComponent,
     GerarCertificadoSemAssinarPessoaFisicaComponent,
    
  ],
  imports: [
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    NgxSearchPipeModule,
    CommonModule,
    DataTablesModule

  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [
    NgSelectConfig,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




