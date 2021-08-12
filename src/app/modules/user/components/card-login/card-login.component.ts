import { Component, OnInit } from '@angular/core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.sass']
})
export class CardLoginComponent implements OnInit {

  icons: any = {
    faLock: faLock,
    faUser: faUser

  }

  login: boolean = false;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // this.spinner.show();
  }

}
