import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

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
  public display=true;
  public tableData = [
    {
      "Username": "",
      "Status": "",
      "Edit Status": "",
      "Role": "",
      "Edit User": ""
    }
  ];
   usersData ?: Array<IUser> = [];
  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.getUsersData();
    
  }

  ngOnChanges(changes?: any): void {
  }

   getUsersData(){
    this.userService.getUsers()
                    .subscribe(data => 
                      {this.usersData = data
                      //console.table(data);
                    }
                      );
  } 


  isEmptyData(): boolean{
    return this.usersData!.length === 0 ;
  }

  edit(user:any){
    this.work = !this.work; 
    console.log(user);
  }
}
