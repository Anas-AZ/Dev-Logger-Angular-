import { LogsService } from './../../services/logs.service';
import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/Models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Log[];

  constructor(private logsService: LogsService){}

  ngOnInit() {

    this.logsService.getLogs().subscribe((logs) => {
      this.logs = logs;
    });

  }

  onSelect(log: Log) {
    this.logsService.changeLog(log);
  }
}
