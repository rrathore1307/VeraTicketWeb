import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService, CommonService } from 'src/app/services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  isSubmitted : boolean;
  formErr:any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private commonService: CommonService,
    ) { }

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
      this.authService.forgotPassword(form.value).subscribe(async(response:any)=>{
        // this.processing = false;
        try{
          this.commonService.handleApiResponse(response).then(res=>{
            console.log(res);
            // this.router.navigate(['/user/profile']);
          });
        }catch(e){
          console.log("error", e)
        }
      },(error)=>{
        // this.processing =false;
        this.formErr = error.error?.error;
        console.log(' formErr',this.formErr)
        let msg = this.formErr && this.formErr.message || 'somthing went wrong';
        this.commonService.showSuccess('error','',msg)
      }) 
    } else{
      console.log('Something went wrong');
    }
  }

  get getControls() {
    return this.resetPasswordForm.controls;
  }

}
