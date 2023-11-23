import { LogsService } from './../../services/logs.service';
import { Component, OnInit } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { Log } from 'src/app/Models/Log';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private logsService: LogsService){}

  ngOnInit() {
    this.logsService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedLog = {
          id: '',
          text: '',
          date: ''
        }
      }
    });

    this.logsService.getLogs().subscribe((logs) => {
      this.logs = logs;
      this.loaded = true;
    });

  }

  onSelect(log: Log) {
    this.logsService.changeLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if (confirm('Are you sure?')) {
      this.logsService.deleteLog(log);
    }
  }
}
