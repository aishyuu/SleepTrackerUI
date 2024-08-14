import { Component, ElementRef, ViewChild } from '@angular/core';
import { SleepData } from '../sleepData';
import { SleepService } from '../sleep.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data: SleepData[] | undefined;
  difference: Number[] | undefined = []
  chart: any = [];

  constructor(private service: SleepService) {
    this.displayInfo();
  }

  
  ngAfterViewInit() { 
    this.getData(); 
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [1,2,3,4,5,6,7],
        datasets: [
          {
            label: "Hours Slept",
            data: this.difference,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        layout: {
          padding: 30
        },
        responsive: true,
        maintainAspectRatio: true
      }
    })
  }

  date: Date = new Date(2017, 4, 6, 17, 23, 42);

  displayInfo() {
    console.log(this.date.getFullYear())
    console.log(this.date.getMonth());
    console.log(this.date.getDay());
    console.log(this.date.getHours());
    console.log(this.date.getMinutes());
    console.log(this.date.getSeconds());
  }

  getData() {
    this.data = this.service.getFakeData()

    for(let day of this.data) {
      let diffMs = day.end.getTime() - day.start.getTime()
      let diffHrs = Math.floor((diffMs % 86400000) / 3600000)
      this.difference?.push(diffHrs)
    }
  }
}
