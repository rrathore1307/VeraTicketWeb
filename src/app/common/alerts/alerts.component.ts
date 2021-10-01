import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  DeleteOption:any = false;  
  subscription:any=[];
  constructor(private alert:AlertService,
              private router:Router) { }

  ngOnInit(): void {
    this.getAlert(); 
  }

  getAlert()
  {
    let deletePopup = this.alert.DeleteOption.subscribe(data=>{      
       this.DeleteOption = data
       if(data)
       {
        this.modalAction('openConfirmModal');
       }
    })
    this.subscription.push(deletePopup);
  }

  modalAction(id='openConfirmModal')
  {
    // document.getElementById(id).click();
  }

  confirmDelete()
  {
    console.log(this)
    console.log("delete the data")
  }
  

}
