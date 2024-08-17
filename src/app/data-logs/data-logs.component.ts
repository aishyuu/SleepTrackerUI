import { Component } from '@angular/core';
import { SleepService } from '../sleep.service';
import { SleepData } from '../sleepData';

@Component({
  selector: 'app-data-logs',
  templateUrl: './data-logs.component.html',
  styleUrls: ['./data-logs.component.css']
})
export class DataLogsComponent {
  data: SleepData[] = [];
  constructor(private service: SleepService) {}

  ngAfterViewInit() {
    this.getData();
  }

  getData(): void {
    this.service.getData().subscribe((data: SleepData[]) => {
      this.data = data.reverse();
      this.adjustDateType();
    })
  }

  adjustDateType():void {
    for (let day of this.data) {
      day.startTime = new Date(day.startTime);
      day.endTime = new Date(day.endTime);
    }
  }

}
