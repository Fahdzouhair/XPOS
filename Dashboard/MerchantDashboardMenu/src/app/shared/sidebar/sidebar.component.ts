import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public rotate:boolean = true;
  public mesg = {
    "show":false,
    "animated":true
  };

  @Output() public eventEmitter = new EventEmitter();


  constructor(private userService: UserService,private auth:AngularFireAuth) { 
   
   }

  ngOnInit(): void {
  }

  toggel(){
    this.mesg.show = !this.mesg.show;
    this.rotate = !this.rotate;

  }
  logOut(arg:any){
    this.eventEmitter.emit();
  }
}
