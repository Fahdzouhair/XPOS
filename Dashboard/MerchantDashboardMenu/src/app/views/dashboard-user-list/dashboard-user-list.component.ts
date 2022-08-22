import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-user-list',
  templateUrl: './dashboard-user-list.component.html',
  styleUrls: ['./dashboard-user-list.component.css']
})
export class DashboardUserListComponent implements OnInit {
  public work:boolean =true;
  public msg:string =  '';
  public fromHtmltoClass ='';
  public hide:boolean = true;
  public number:number = 1;
  public colorTable = ['red','yellow','green'];

  public tableData = [
    {
      "User Name": "test",
      "Status ID": "ahmed",
      "Edit Status ID": "ibrahim",
      "Role": "test",
      "Edit User": "testhjjh"
    }
  ];
 

  constructor() { }

  ngOnInit(): void {
  }

  fire(event:any){
    //console.log(event);
   // this.msg=event;
  }
}
