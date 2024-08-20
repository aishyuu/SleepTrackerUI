import { Component } from '@angular/core';
import { SleepData } from '../sleepData';
import { Router } from '@angular/router';
import { SleepService } from '../sleep.service';

@Component({
  selector: 'app-new-log',
  templateUrl: './new-log.component.html',
  styleUrls: ['./new-log.component.css']
})
export class NewLogComponent {
  model = {
    type: "",
    startTime: "",
    endTime: ""
  }

  options = ["Sleep", "Nap"]

  constructor(private service: SleepService, private router: Router) {}

  onSubmit() {
    console.log(this.model);
    let sleep: SleepData = {
      type: this.model.type,
      startTime: new Date(this.model.startTime),
      endTime: new Date(this.model.endTime)
    }

    this.service.postData(sleep)
      .subscribe((data) => {
        this.router.navigate(['/data-logs'])
      })
  }
}
