import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoMaterialModule } from 'src/app/material-module';
import { ListEmployeComponent } from './list-employe.component';

const routes: Routes = [
  {path:'list', component: ListEmployeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            DemoMaterialModule],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
