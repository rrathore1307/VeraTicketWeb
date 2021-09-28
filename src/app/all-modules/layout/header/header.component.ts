import { Component, OnInit } from '@angular/core';
import { DataService,AuthService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userDetail:any={};
  constructor(private data:DataService,private auth:AuthService) { }
  ngOnInit(): void {
    // check login user detail
    this.data.userDetail.subscribe(data=>{
      console.log('login data',data)

      if(data)
      {
        this.userDetail = data;
        console.log('login data',data)
        // fetch from using token 
      }
      else
      {
        this.fetchLoginUserDetail();
        
      }
    })
    
  }

  ngDestroy()
  {
    this.data.userDetail.unsubscribe();
  }
  fetchLoginUserDetail()
  {
    console.log('fetch from server using token');
  }
  logout()
  {
    this.auth.logout();
  }

}
