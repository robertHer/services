import { Component, EventEmitter, Output } from '@angular/core';
import {LogginService} from '../login.service';
import { AccountService } from '../account.service';
// import { constants } from 'http2';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService]
})
export class NewAccountComponent {
  

  constructor(private logginService: LogginService, private accountService:AccountService){

  } //binding to property

  onCreateAccount(accountName: string, accountStatus: string ,) {
   this.accountService.addAccount(accountName, accountStatus);
    this.logginService.logStatusChange(accountStatus);

    const service = new LogginService();
    service.logStatusChange(accountStatus);
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
