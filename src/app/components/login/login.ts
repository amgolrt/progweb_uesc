import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    senha: ''
  };

  onEntrar(): void {
    console.log('--- Dados de Login Recebidos ---');
    console.log('E-mail:', this.loginData.email);
    console.log('Senha:', this.loginData.senha);
  }

  onEsqueciSenha(event: Event): void {
    event.preventDefault();
    console.log('Ação: Redirecionar para Esqueci a Senha');
  }

  onCriarConta(event: Event): void {
    event.preventDefault();
    console.log('Ação: Redirecionar para Criar Conta');
  }
}