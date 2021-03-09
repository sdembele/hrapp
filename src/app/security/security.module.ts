import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { DemoMaterialModule } from '../material-module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ForgorpwdComponent } from './forgorpwd/forgorpwd.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgorpwdComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    DemoMaterialModule,
  ]
})
export class SecurityModule { }
