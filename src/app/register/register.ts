import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  
  // la estructura de datos que enviamops al backend
   usuario= {
    username:'',
    email: '',
    pasword: ''
  };

  constructor(private http:HttpClient){}
   registro(){
    this.http.post('http://127.0.0.1:8000/api/usuarios/registro/', 
      this.usuario).subscribe({
        next:(respuesta)=>{
          console.log(respuesta);
          
        }
      })
   }
  //
}
