import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//  aqui ajustamos la direccion de de pruba del backend, viene del ptoyectodjangoproyecto
  private API_URL = 'http://127.0.0.1:8000/'; 

  constructor(private http: HttpClient) {}

  // Petición POST para registro
  register(userData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, userData);
  }

  // Petición POST para inicio de sesión
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }

  // Guardar token/sesión en localStorage
  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // Obtener token guardado
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  // Eliminar sesión
  logout(): void {
    localStorage.removeItem('auth_token');
  }
}