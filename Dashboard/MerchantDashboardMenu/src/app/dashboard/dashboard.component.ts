import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TestService } from '../Service/test.service';


@Component({
  selector: 'app-dashboard',
  host:{
    class:'container'
  },
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myArray: any[] = [];

  constructor(private testService:TestService) {
      
      }

  ngOnInit(): void {
    /* this.testService.getMerchants()
        .subscribe(merchants =>{
          this.myArray = merchants;
        })
        }; */
      }
      
}