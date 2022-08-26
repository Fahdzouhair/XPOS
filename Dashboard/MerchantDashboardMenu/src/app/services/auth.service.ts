import { Injectable } from '@angular/core';
import{AngularFireAuth}from'@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private fireauth: AngularFireAuth,private router:Router) { 
    
  }

  //login methode
  login(email:string , password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(() => {
       localStorage.setItem('token','true');
       this.router.navigate(['/dashboard/analytics']);
       alert('Hello User');
      
    }, err =>{
         this.router.navigate(['/login']);
         alert('something wrong');
    })

  }

  signUP(){
      
  }
}
