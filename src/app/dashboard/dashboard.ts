import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  nombreUsuario: string = 'Usuario';

  constructor(private router: Router) {}

  ngOnInit() {
    const nombre = localStorage.getItem('username');
    if (nombre) {
      this.nombreUsuario = nombre;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}