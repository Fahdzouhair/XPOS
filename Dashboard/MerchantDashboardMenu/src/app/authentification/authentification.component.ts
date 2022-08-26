import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  email:string='';
  password: string='';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  
  login(){
    if(this.email==''){
      alert('please enter email');
      return;
    }
    if(this.password==''){
      alert('please enter passwor');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';

  }

}
