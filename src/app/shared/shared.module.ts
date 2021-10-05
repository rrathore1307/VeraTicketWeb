import { NgModule } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonService } from '../services';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

let imports = [
  ConfirmDialogModule,
  MessagesModule,
  InputTextModule,
  CheckboxModule,
  CommonModule,
  FormsModule,
  DropdownModule,
  CalendarModule,
  ToastModule
]
if(isPlatformBrowser) {
  imports.push(ButtonModule)
}

@NgModule({
  declarations: [],
  imports: imports,
  exports:  imports,
  providers: [ConfirmationService, CommonService, MessageService],
})
export class SharedModule { }
