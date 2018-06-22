import { Component, EventEmitter, Output } from '@angular/core';
import {LogginService} from '../login.service';
// import { constants } from 'http2';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logginService: LogginService){

  } //binding to property

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.logginService.logStatusChange

    const service = new LogginService();
    service.logStatusChange(accountStatus);
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
