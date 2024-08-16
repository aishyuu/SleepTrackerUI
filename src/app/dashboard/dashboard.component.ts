import { Component, ElementRef, ViewChild } from '@angular/core';
import { SleepData } from '../sleepData';
import { SleepService } from '../sleep.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: SleepData[] = [];
  differenceSleep: number[] = [];
  differenceNap: number[] = [];
  averageSleep: number = 0;
  averageNap: number = 0;
  chartSleep: any = [];
  chartNap: any = [];

  constructor(private service: SleepService) {}

  ngAfterViewInit() {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((data: SleepData[]) => {
      this.data = data;
      this.adjustDateType();
      this.getAverageTimes();
      this.chartData();
    });
  }

  adjustDateType(): void {
    for (let day of this.data) {
      day.startTime = new Date(day.startTime);
      day.endTime = new Date(day.endTime);
    }
  }

  getAverageTimes(): void {
    for (let day of this.data) {
      let diffMs = day.endTime.getTime() - day.startTime.getTime();
      let diffHrs = Math.floor((diffMs % 86400000) / 3600000);
      let diffMin = Math.round(((diffMs % 86400000) % 3600000) / 60000) / 60;
      if (day.type === 'Sleep') {
        this.differenceSleep?.push(diffHrs + diffMin);
      } else {
        this.differenceNap?.push(diffHrs + diffMin);
      }
    }
    this.differenceSleep = this.differenceSleep
      ?.reverse()
      .slice(0, 7)
      .reverse();
    this.differenceNap = this.differenceNap?.reverse().slice(0, 7).reverse();
    this.averageSleep = this.getAverage(this.differenceSleep);
    this.averageNap = this.getAverage(this.differenceNap);
  }

  chartData(): void {
    this.chartSleep = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: 'Hours Slept',
            data: this.differenceSleep,
            backgroundColor: 'blue',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        layout: {
          padding: 30,
        },
        responsive: true,
      },
    });

    this.chartNap = new Chart('napCanvas', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7],
        datasets: [
          {
            label: 'Hours Napped',
            data: this.differenceNap,
            backgroundColor: 'orange',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        layout: {
          padding: 30,
        },
        responsive: true,
      },
    });

    this.chartSleep();
    this.chartNap();
  }

  getAverage(arr: number[]): number {
    let total = 0;
    for (let num of arr) {
      total = total + num;
    }
    return Math.round((total / arr.length) * 100) / 100;
  }
}
