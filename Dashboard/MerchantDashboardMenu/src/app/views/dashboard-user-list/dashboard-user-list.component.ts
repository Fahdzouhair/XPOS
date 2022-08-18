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

  public parentString:string = "latifa";
  public ach = ["fahd","saif","latifa"];
 /*  public tableData = [
    {
      "User ID": "test",
      "No. Of Batches": "ahmed",
      "No. Of Transactions": "ibrahim",
      "No. Of NonCard Transactions": "test",
      "Date of Last Transaction": "testhjjh",
      "Dexlined Transactions": "test7899"
  },
  {
    "User ID": "ussef",
    "No. Of Batches": "ahmed",
    "No. Of Transactions": "ibrahim",
    "No. Of NonCard Transactions": "test",
    "Date of Last Transaction": "testhjjh",
    "Dexlined Transactions": "test657"
},
{
  "User ID": "test",
  "No. Of Batches": "ahmed",
  "No. Of Transactions": "ibrahim",
  "No. Of NonCard Transactions": "test",
  "Date of Last Transaction": "testhjjh",
  "Dexlined Transactions": "test8209094"
}
];
 */

public tableToTest = [
  {
    "username" : "fahd",
    "email" : "fahd@example.com",
    "role" : "user",
  },
  {
    "username" : "fahd",
    "email" : "fahd@example.com",
    "role" : "user",
  },
  {
    "username" : "fahd",
    "email" : "fahd@example.com",
    "role" : "user",
  },
]


  constructor() { }

  ngOnInit(): void {
  }

  fire(event:any){
    //console.log(event);
   // this.msg=event;
  }
}
