import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  toggel(){
    this.mesg.show = !this.mesg.show;
    this.rotate = !this.rotate;

  }
}
