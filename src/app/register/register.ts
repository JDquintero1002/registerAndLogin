import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  usuario = {
    username: '',
    email: '',
    password: '',
  };

  mensajeError: string = '';
  mensajeExito: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  registro() {
    this.mensajeError = '';
    this.mensajeExito = '';

    if (this.usuario.username !== '' && this.usuario.email !== '' && this.usuario.password !== '') {
      this.http.post('http://localhost:3000/api/registro', this.usuario).subscribe({
        next: (respuesta: any) => {
          console.log(respuesta);
          this.mensajeExito = respuesta.mensaje;
          if (respuesta.token) {
            localStorage.setItem('token', respuesta.token);
            localStorage.setItem('username', this.usuario.username);
          }
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1500);
        },
        error: (error) => {
          console.log(error);
          this.mensajeError = error.error?.mensaje || 'Error al registrar. Intenta de nuevo.';
        },
      });
    } else {
      this.mensajeError = 'Todos los campos son obligatorios.';
    }
  }

  irLogin() {
    this.router.navigate(['/']);
  }
}