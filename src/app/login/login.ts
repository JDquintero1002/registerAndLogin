import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario={
    username:"",
    password:"",

  }
  constructor(private http:HttpClient, private router:Router){}
  login(){
  
      this.http.post('http://127.0.0.1:8000/api/usuarios/login/', 
        this.usuario).subscribe({
          next:(respuesta:any)=>{
            console.log(respuesta)
            alert(respuesta.mensaje)
            if(respuesta.token){
              this.router.navigate(['/dashboard'])
            }
            else{
              this.router.navigate(['/registro'])
            }
          }
        })
    }
    registro(){
      this.router.navigate(['/registro'])
    }
}
