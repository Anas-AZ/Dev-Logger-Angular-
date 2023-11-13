import { Injectable } from '@angular/core';
import { Log } from '../Models/Log';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logs: Log[];

  private logSource = new BehaviorSubject({ id: null, text: null, date: null });
  currentLog = this.logSource.asObservable();

  constructor() {

    this.logs = [
      {
        id: '1',
        text: 'Generated Components',
        date: new Date('11/13/23 02:21:00')
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('11/13/23 02:22:00')
      },
      {
        id: '3',
        text: 'Added Logs Component',
        date: new Date('11/13/23 02:23:00')
      }
    ]

   }


  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  changeLog(log: Log) {
    this.logSource.next(log)
  }
}
