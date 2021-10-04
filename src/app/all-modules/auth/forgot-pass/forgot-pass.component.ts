import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  changePassword: FormGroup;
  isSubmitted: boolean;
  ConfirmPassErr: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.changePassword = this.fb.group({
      password: ['', [Validators.required]],
      confirmPass: ['']
    })
  }


  submit() {
    this.isSubmitted = true;
    this.ConfirmPassErr = '';
    if (!this.changePassword.valid) {
      this.changePassword.markAllAsTouched();
      console.log('Something went wrong');
      return false;
    }
    if (this.changePassword.get('password').value != this.changePassword.get('confirmPass').value) {
      this.ConfirmPassErr = "Password and confirm password should be same.";
      console.log(this.ConfirmPassErr);
      return false;
    }

    console.log(this.changePassword.value);
  }

  get getControls() {
    return this.changePassword.controls;
  }

}
