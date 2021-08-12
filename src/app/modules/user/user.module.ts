import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { CardLoginComponent } from './components/card-login/card-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    CardLoginComponent
  ],
  imports: [
  CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
