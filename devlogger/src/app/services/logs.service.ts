import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Log } from '../Models/Log';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  logs: Log[];

  private logSource = new BehaviorSubject({ id: null, text: null, date: null });
  currentLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {
    //     id: '1',
    //     text: 'Generated Components',
    //     date: new Date('11/13/23 02:21:00'),
    //   },
    //   {
    //     id: '2',
    //     text: 'Added Bootstrap',
    //     date: new Date('11/13/23 02:22:00'),
    //   },
    //   {
    //     id: '3',
    //     text: 'Added Logs Component',
    //     date: new Date('11/13/23 02:23:00'),
    //   },
    // ];

    this.logs = [];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  changeLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    // this.logs = [...this.logs, log];
    this.logs.unshift(log);
  }

  updateLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (curr.id === log.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((curr, index) => {
      if (curr.id === log.id) {
        this.logs.splice(index, 1);
      }
    });
  }

  clearState() {
    this.stateSource.next(true);
  }

}
