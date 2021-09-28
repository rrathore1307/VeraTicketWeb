import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private alert:AlertService) { }

  ngOnInit(): void {
  }
  test1()
  {
    this.alert.deletePopup(1);
  }
  test2()
  {
    this.alert.deletePopup(2);
  }
  test3()
  {
    this.alert.deletePopup(3);
  }

}
