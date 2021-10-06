import { NgModule } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from '../services';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';

let imports = [
  ConfirmDialogModule,
  MessagesModule,
  InputTextModule,
  CheckboxModule,
  CommonModule,
  FormsModule,
  DropdownModule,
  CalendarModule,
  TabViewModule,
  RadioButtonModule
]
if(isPlatformBrowser) {
  imports.push(ButtonModule)
}

@NgModule({
  declarations: [],
  imports: imports,
  exports:  imports,
  providers: [ConfirmationService],
})
export class SharedModule { }
