import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from '../services';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';


@NgModule({
  declarations: [],
  imports: [
    ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    InputTextModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    CascadeSelectModule
  ],
  exports:  [ConfirmDialogModule,
    ButtonModule,
    MessagesModule,
    InputTextModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    CascadeSelectModule
  ],
  providers: [ConfirmationService],
})
export class SharedModule { }
