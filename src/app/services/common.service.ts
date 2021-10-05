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
    return new Promise((resolve, reject)=>{
      try{
        let code = response.code || 0;
        switch(code){
          case 200:
            this.showSuccess('success', '', response.message)
            resolve(response.data);
          break;
          case 402:
            this.showSuccess('error', '', response.message)
            reject();
          break;  
          default:
              let msg = response.message || 'Somthin went wrong'
              let title = code != 0 ? 'info' : 'error'
              this.showSuccess(title, '', msg)
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
