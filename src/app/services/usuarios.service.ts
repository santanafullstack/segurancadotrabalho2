import { HttpClient } from '@angular/common/http';
import { CriarContaRequestModel } from '../models/usuarios/criarconta-request.model';
import { Observable } from 'rxjs';
import { CriarContaResponseModel } from '../models/usuarios/criarconta-response.model';
import { Injectable } from '@angular/core';
import { AutenticarRequestModel } from '../models/usuarios/autenticar-request.model';
import { AutenticarResponseModel } from '../models/usuarios/autenticar-response.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  //construtor
  constructor(
    //injeção de dependência
    private httpClient: HttpClient
  ) {}

  autenticar(
    model: AutenticarRequestModel
  ): Observable<AutenticarResponseModel> {
    //Requisição POST para o serviço
    return this.httpClient.post<AutenticarResponseModel>(
      `${environment.apiUsuarios}/usuarios/autenticar`,
      model
    );
  }
}
