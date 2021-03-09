import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgorpwdComponent } from './forgorpwd/forgorpwd.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'auth',
  children :  [
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    {path:'forgotpwd', component: ForgorpwdComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
