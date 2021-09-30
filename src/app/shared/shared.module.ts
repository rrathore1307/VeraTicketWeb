import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from '../services';


@NgModule({
  declarations: [],
  imports: [
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
  ],
  exports:  [ConfirmDialogModule,
    ButtonModule,
    MessagesModule],
  
})
export class SharedModule { }
