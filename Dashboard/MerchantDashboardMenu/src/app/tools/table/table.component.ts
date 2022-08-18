import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {  

  

  @Input()  data_:any =[] ;
  @Input("testString") childString:string="";
  @Input() testArr_:any = [];

  public tableData = [];

  public tabKey:any = [];
  public tabValue:any = [];

  constructor() {
    
   
    
   }
 
  ngOnInit(): void {
    //this.getData(this.data_);
  }
  ngOnChanges(changes: any): void {
    console.log(changes);
      if(changes?.data_?.currentValue ){
        this.getData(this.data_);
      }
      
  }

  ngAfterViewInit(): void {
    this.getData(this.data_);
  }

  ngafterView(): void {
    this.getData(this.data_);
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



