import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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


  constructor() { 
   
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
