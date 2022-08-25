import { Component, OnInit, Output } from '@angular/core';
import { Chart, registerables} from 'chart.js';

Chart.register(...registerables);


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ["All Transaction", "Successful Transaction", "Declined Transaction"],
          datasets: [{
              label: '',
              data: [10, 3 , 5],
              backgroundColor : ["yellow", "green","red"],
             
          }]
      },
      options: {
          scales: {
              y: {
                  
                  beginAtZero: true
              }
          },
          plugins: {
            legend: {
              display: false
            },
            
          }
      }
  });
    
}
}
