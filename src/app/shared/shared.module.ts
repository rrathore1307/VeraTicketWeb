import { NgModule } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CommonService } from '../services';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ToastrModule } from 'ngx-toastr';
let imports = [
  ConfirmDialogModule,
  MessagesModule,
  InputTextModule,
  CheckboxModule,
  CommonModule,
  FormsModule,
  CascadeSelectModule,
  ToastrModule
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
