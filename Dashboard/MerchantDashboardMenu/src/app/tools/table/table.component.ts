import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {  

  

  @Input()  data_:any =[ {
    "firstname" : "fahd",
    "lastname" : "zouhair",
    "email" : "fahd@gmail.com"
  }] ;
  @Input() count: string = '';
  

  public tableData = [];

  public tabKey:any = [];
  public tabValue:any = [];

  constructor() {
    
   }
 
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: any): void {
      if(changes?.data_?.currentValue ){
        this.getData(this.data_);
      }
      
  }




  public isEmptyData(){
    return this.tabKey.length ?  false : true;
  }

  public getData(dataTable: any[]){
    dataTable.forEach((data: any) => {
      this.tabKey = Object.keys(data);
      this.tabValue.push(Object.values(data));
     
  })
  }


} 



