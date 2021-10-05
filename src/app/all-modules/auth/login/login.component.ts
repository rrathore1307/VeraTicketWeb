import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, CommonService } from 'src/app/services';
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
  
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService,private toastr: ToastrService,
    private commonService: CommonService) {
      // if(this.auth.getToken()){
      //   this.router.navigate(['/']);
      // }
     }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }

  submit() {
    // this.commonService.showSuccess('success', '', 'sss')
    this.processing= true;
    this.submited = true;
    this.loginErr=null;
    if(!this.loginForm.valid)
    {
      this.processing =false;
      this.loginForm.markAllAsTouched();
      return false;
    }
 
    this.auth.signIn(this.loginForm.value).subscribe(async(response:any)=>{
      this.processing = false;
      try{
        this.commonService.handleApiResponse(response).then(res=>{
          console.log(res);
          this.router.navigate(['/']);
        });
      }catch(e){
        console.log("error", e)
      }
    },(error)=>{
      this.processing =false;
      this.loginErr = error.error?.error;
      console.log(' loginErr',this.loginErr)
      let msg = this.loginErr && this.loginErr.message || 'somthing went wrong';
      this.commonService.showSuccess('error','',msg)
    }
    )}

  get getControls() {
    return this.loginForm.controls;
  }
}
