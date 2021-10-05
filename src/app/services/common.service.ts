import { Injectable } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // constructor(){}
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
  
  handleApiResponse(response){
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
    return new Promise((resolve, reject)=>{
      try{
        debugger;
        let code = response.code;
        switch(code){
          case 200:
            // this.showSuccess('success', '', response.message)
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
            // resolve(response.data);
          break;
          case '402':
            this.showSuccess('error', '', response.message)
            reject();
          break;
        }
      }catch(e){

      }
    })
  }
  
  showSuccess(severity, summary, detail) {
    this.messageService.add({severity: severity, summary: summary, detail: detail});
  }
}
