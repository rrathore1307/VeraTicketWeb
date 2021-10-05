import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService, CommonService } from 'src/app/services';
import User from 'src/app/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submited: boolean;
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService,
    private commonService: CommonService,
    private router:Router
    ) { }
  ngOnInit(): void {
    // const pattern = "/^[0-9]*$/";
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      role: ['ORGANIZER', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPass: ['']
    })
  }
  
  ConfirmPassErr = '';

  submit() {
    this.submited = true;
    // this.commonService.showSuccess();
    this.ConfirmPassErr = '';
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return false;
    }

    // validate confirm pasword
    if (this.registerForm.get('password').value != this.registerForm.get('confirmPass').value) {
      this.ConfirmPassErr = "Password and confirm password should be same."
      return false;
    }
    const {
      userName,
      firstName,
      lastName,
      email,
      role,
      password,
    } = this.registerForm.value;

    let formData = {
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      password: password,
    }

    console.log(formData);
    this.auth.register(formData).subscribe((response: any) => {
      console.log(response);
      try{
        this.commonService.handleApiResponse(response).then(res=>{
          console.log(res);
          this.router.navigate(['/auth/login']);
        });
      }catch(e){
        console.log("error", e)
      }
      // if (res.message === 'Success') {
      //   // this.tostr.success('User registered successfully', 'Success');
      // } else {
      //   // this.tostr.error('Something went wrong', 'Error');
      // }
    })
  }

  get getControls() {
    return this.registerForm.controls;
  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.registerForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
}
