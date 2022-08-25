import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {
  
  
  
  public tableData = [
    {
      "User ID": "test",
      "No. Of Batches": "ahmed",
      "No. Of Transactions": "ibrahim",
      "No. Of NonCard Transactions": "test",
      "Date of Last Transaction": "testhjjh",
      "Dexlined Transactions": "ahmed"
  },
  {
    "User ID": "ussef",
    "No. Of Batches": "ahmed",
    "No. Of Transactions": "ibrahim",
    "No. Of NonCard Transactions": "test",
    "Date of Last Transaction": "testhjjh",
    "Dexlined Transactions": "bo3o"
},
{
  "User ID": "test",
  "No. Of Batches": "ahmed",
  "No. Of Transactions": "ibrahim",
  "No. Of NonCard Transactions": "test",
  "Date of Last Transaction": "testhjjh",
  "Dexlined Transactions": "bi3i"
}
];
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
