import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  errMesg ?: string ;
  isErr : boolean = true ;
  constructor(private userService: UserService,private router:Router) { 
   
  }

  ngOnInit(): void {
    
  }
  
  logIn(userCode:string, password:string){
      this.userService.signInUser(userCode, password)
                     .catch(err => {
                        this.errMesg = err.message.substring(err.message.indexOf(':')+1, err.message.indexOf('.'));
                        this.isErr = false;
                     });  
  }
}
