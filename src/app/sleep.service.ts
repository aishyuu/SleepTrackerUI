import { Injectable } from '@angular/core';
import { SleepData } from './sleepData';

@Injectable({
  providedIn: 'root'
})
export class SleepService {

  constructor() { }

  getFakeData() {
    let sleepData: SleepData[] = [
      {
        "id": 1,
        "type": "Sleep",
        "start": new Date(2024, 8, 13, 21, 0),
        "end": new Date(2024, 8, 14, 5, 0)
      },
      {
        "id": 2,
        "type": "Sleep",
        "start": new Date(2024, 8, 14, 23, 0),
        "end": new Date(2024, 8, 15, 6, 0)
      },
      {
        "id": 3,
        "type": "Sleep",
        "start": new Date(2024, 8, 15, 21, 0),
        "end": new Date(2024, 8, 16, 4, 0)
      },
      {
        "id": 4,
        "type": "Sleep",
        "start": new Date(2024, 8, 16, 22, 0),
        "end": new Date(2024, 8, 17, 5, 0)
      },
      {
        "id": 5,
        "type": "Sleep",
        "start": new Date(2024, 8, 17, 21, 0),
        "end": new Date(2024, 8, 18, 7, 0)
      },
      {
        "id": 6,
        "type": "Sleep",
        "start": new Date(2024, 8, 18, 23, 0),
        "end": new Date(2024, 8, 19, 5, 0)
      },
      {
        "id": 7,
        "type": "Sleep",
        "start": new Date(2024, 8, 19, 19, 0),
        "end": new Date(2024, 8, 20, 5, 0)
      }
    ]

    return sleepData
  }
}
