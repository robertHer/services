import { LogginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private LogginService: LogginService) {
          
      }

      addAccount(name:string , status:string){
    this.accounts.push({name, status});
    this.LogginService.logStatusChange(status);
    

      } 
      updateStatus(id:number, status:string){
          this.accounts[id].status = status;
          this.LogginService.logStatusChange(status);
      }
}
