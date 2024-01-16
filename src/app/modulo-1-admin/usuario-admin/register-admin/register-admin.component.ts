import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})


export class RegisterAdminComponent implements OnInit{

  mensagem: string = '';
  perfis: any [] = []

   //construtor
   constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute


    
  ) {}

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:8088/api/usuarios/consultar-perfis')
      .subscribe({
        next: (data) => {
          // Filtrar os perfis desejados (exemplo: ADMIN e USER)
          this.perfis = data.filter(p => p.nome === 'Empresa' || p.nome === 'Aluno Particular');
        },
        error: (e) => {
          console.log(e);
        }
      });
  }
  

// Add 'id' to the form controls in your component
formRegister = new FormGroup({
  nome: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  senha: new FormControl('', [Validators.required]),
  id: new FormControl('', [Validators.required]),
});


get form(): any {
  return this.formRegister.controls;
}

onSubmit(): void {
  this.httpClient
    .post('http://localhost:8088/api/usuarios/criar-conta', this.formRegister.value)
    .subscribe({
      next: (data: any) => {
        this.mensagem = `Conta criada com sucesso!`;
        this.formRegister.reset
      },
      error: (e) => {
        console.log(e.error);
      }
    });
}
}