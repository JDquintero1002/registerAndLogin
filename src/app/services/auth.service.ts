import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    private apiUrl = 'http://127.0.0.1:8000/api';
    

    // observable para saber si el usuario esta autenticado
    private usuarioAutenticadoSubject = new BehaviorSubject<Boolean>(this.hayToken());
    public usuarioAutenticado$ = this.usuarioAutenticadoSubject.asObservable();

    constructor(
        private http: HttpClient,
        private router: Router
    ){}

    // registro
}