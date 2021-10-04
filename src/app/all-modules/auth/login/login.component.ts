import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submited:boolean;
  processing:boolean;
  loginForm:FormGroup;
  loginErr:any;
  
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService,private toastr: ToastrService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }

  submit()
  {
    this.processing= true;
    this.submited = true;
    this.loginErr=null;
    if(!this.loginForm.valid)
    {
      this.processing =false;
      this.loginForm.markAllAsTouched();
      return false;
    }
 
    this.auth.signIn(this.loginForm.value).subscribe((res:any)=>{
      this.processing = false;
      let resbody = res.body;
      console.log(res.body);
      if(resbody.data.accessToken)
      {
        this.toastr.success('Logged in successfully!', 'Success');
        this.router.navigate(['/']);
      }
      else if(resbody.data == null){
        this.toastr.error('something went wrong!', 'Error');
      }
    },(error)=>{
      this.processing =false;
      this.loginErr = error.error?.error;
      console.log(' loginErr',this.loginErr)
      alert(this.loginErr.message);
      this.toastr.error(this.loginErr.message, 'Alert');
    }
 
    )}

  get getControls() {
    return this.loginForm.controls;
  }
}
