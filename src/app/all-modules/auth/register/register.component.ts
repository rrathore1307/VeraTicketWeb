import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submited:boolean;
  registerForm:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService) { }
  ngOnInit(): void {
    const pattern = "/^[0-9]*$/";
    this.registerForm = this.fb.group({
      userName:['',[Validators.required]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      role:['',[Validators.required]],
      password:['',]
      // confirmPass:['']
    })
  }
  ConfirmPassErr='';
  submit()
  {
    this.submited = true;
    this.ConfirmPassErr='';
    if(!this.registerForm.valid)
    {
      this.registerForm.markAllAsTouched();
      return false;
    }

    // validate confirm pasword
    // if(this.registerForm.get('password').value !=this.registerForm.get('confirmPass').value)
    // {
    //   this.ConfirmPassErr = "Password and confirm password should be same."
    //   return false;
    // }
    console.log(this.registerForm.value);
    this.auth.register(this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
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
