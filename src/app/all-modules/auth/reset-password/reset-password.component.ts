import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  isSubmitted : boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
    })
  }

  submit(){
    this.isSubmitted = true;
    let form = this.resetPasswordForm;
    if(form.valid){
      console.log(form.value);
    }
    else{
      console.log('Something went wrong');
    }
  }

  get getControls() {
    return this.resetPasswordForm.controls;
  }

}
