import { Injectable } from '@angular/core';
import { SleepData } from './sleepData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SleepService {
  url: string = "https://localhost:7129/api/SleepDatas"
  constructor(private http: HttpClient) { }

  getData(): Observable<SleepData[]> {
    return this.http.get<SleepData[]>(`${this.url}`)
  }

  getFakeData() {
    let sleepData: SleepData[] = [
      {
        "id": 1,
        "type": "Sleep",
        "startTime": new Date(2024, 8, 13, 21, 0),
        "endTime": new Date(2024, 8, 14, 5, 0)
      },
      {
        "id": 2,
        "type": "Sleep",
        "startTime": new Date(2024, 8, 14, 23, 0),
        "endTime": new Date(2024, 8, 15, 6, 0)
      },
      {
        "id": 3,
        "type": "Sleep",
        "startTime": new Date(2024, 8, 15, 21, 0),
        "endTime": new Date(2024, 8, 16, 4, 0)
      },
      {
        "id": 4,
        "type": "Sleep",
        "startTime": new Date(2024, 8, 16, 22, 0),
        "endTime": new Date(2024, 8, 17, 5, 0)
      },
      {
        "id": 5,
        "type": "Sleep",
        "startTime": new Date(2024, 8, 17, 21, 0),
        "endTime": new Date(2024, 8, 18, 7, 0)
      },
      {
        "id": 6,
        "type": "Sleep",
        "startTime": new Date(2024, 8, 18, 23, 0),
        "endTime": new Date(2024, 8, 19, 5, 0)
      },
      {
        "id": 7,
        "type": "Sleep",
        "startTime": new Date(2024, 8, 19, 19, 0),
        "endTime": new Date(2024, 8, 20, 5, 0)
      },
      {
        "id": 8,
        "type": "Nap",
        "startTime": new Date(2024, 8, 20, 16, 0),
        "endTime": new Date (2024, 8, 20, 17, 30)
      },
      {
        "id": 9,
        "type": "Nap",
        "startTime": new Date(2024, 8, 19, 16, 0),
        "endTime": new Date (2024, 8, 19, 17, 30)
      },
      {
        "id": 10,
        "type": "Nap",
        "startTime": new Date(2024, 8, 19, 16, 0),
        "endTime": new Date (2024, 8, 19, 18, 30)
      },
      {
        "id": 11,
        "type": "Nap",
        "startTime": new Date(2024, 8, 19, 16, 0),
        "endTime": new Date (2024, 8, 19, 17, 0)
      },
      {
        "id": 12,
        "type": "Nap",
        "startTime": new Date(2024, 8, 19, 16, 0),
        "endTime": new Date (2024, 8, 19, 17, 0)
      },
      {
        "id": 13,
        "type": "Nap",
        "startTime": new Date(2024, 8, 19, 16, 0),
        "endTime": new Date (2024, 8, 19, 17, 0)
      },
      {
        "id": 14,
        "type": "Nap",
        "startTime": new Date(2024, 8, 19, 16, 0),
        "endTime": new Date (2024, 8, 19, 17, 0)
      }
    ]

    return sleepData
  }
}
