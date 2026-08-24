import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = {
    email: '',
    password: '',
  };

  mensajeError: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.mensajeError = '';

    if (!this.usuario.email || !this.usuario.password) {
      this.mensajeError = 'Todos los campos son obligatorios.';
      return;
    }

    this.http.post('http://localhost:3000/api/login', this.usuario).subscribe({
      next: (respuesta: any) => {
        console.log('Respuesta backend:', respuesta);
        if (respuesta.token) {
          localStorage.setItem('token', respuesta.token);
          if (respuesta.username) {
            localStorage.setItem('username', respuesta.username);
          }
          alert(respuesta.mensaje);
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        console.error('Error de login:', error);
        this.mensajeError = error.error?.mensaje || 'Credenciales incorrectas. Intenta de nuevo.';
      },
    });
  }

  registro() {
    this.router.navigate(['/registro']);
  }
}