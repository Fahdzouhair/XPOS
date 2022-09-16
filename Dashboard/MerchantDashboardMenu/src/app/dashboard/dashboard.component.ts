import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { IUser } from '../Models/iuser';
import { UserService } from '../services/user.service';
import { User2Service } from '../services/user2.service';


@Component({
  selector: 'app-dashboard',
  host: {
    class: 'container'
  },
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myArray: any[] = [];
  msgLog?: boolean = false;
  time:number = 0;
  constructor(private userService: UserService, private router: Router,private user2S:User2Service,private afs:AngularFirestore) {
    
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.time++;
      this.msgLog = true;
    }, 4000);
    /* const user:IUser = {
      user_name: 'test2.one@hps.com',
      user_code: 'fahd',
      status: 'actif',
      password: '098977',
      profile_fk: 'dev'
    }
    this.user2S.testCreat(user).then(res => console.log(res)).catch(err => console.log(err)); */
  }
  
  signOut(e: any) {
    this.userService.signOutUser();
  }

 

}