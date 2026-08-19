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
  
  // la estructura de datos que enviamops al backend
   usuario= {
    username:'',
    email:'',
    password: ''
  };

  constructor(private http:HttpClient, private router:Router){}
   registro(){
    if(this.usuario.username !="" && this.usuario.email !="" && this.usuario.password){
    this.http.post("http://127.0.0.1:8000/api/usuarios/registro/", 
      this.usuario).subscribe({
        next:(respuesta:any)=>{
          console.log(respuesta)
          if(respuesta.mensaje && respuesta.token){
            alert(respuesta.mensaje)
            this.router.navigate(['/dashboar'])
          }  
        },
        error:(error)=>{
          console.log(error)
          //alert(r)
          
        }
      })
    }
    else{
      alert("todos los campos son obligatorios")
    }
   }
}
