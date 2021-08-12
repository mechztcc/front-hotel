import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { CardLoginComponent } from './components/card-login/card-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    CardLoginComponent
  ],
  imports: [
  CommonModule,
    UserRoutingModule,
    FontAwesomeModule
  ]
})
export class UserModule { }
