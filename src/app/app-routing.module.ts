import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeModule } from './employe/employe.module';
import { ListEmployeComponent } from './employe/list-employe/list-employe.component';
import { LoginComponent } from './security/login/login.component';
import { SecurityModule } from './security/security.module';

const routes: Routes = [
  {path:'',loadChildren: () => SecurityModule},
  {path:'employe', loadChildren: () => import('./employe/employe.module').then(m =>m.EmployeModule)},
  {path:'employe/list',loadChildren: () => EmployeModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            EmployeModule,
          SecurityModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
