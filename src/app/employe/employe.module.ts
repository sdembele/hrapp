import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeComponent } from './list-employe/list-employe.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeRoutingModule } from './list-employe/employe-routing.module';
import { DemoMaterialModule } from '../material-module';
import { NewEmployeComponent } from './new-employe/new-employe.component';
import { ShowSheetEmployeComponent } from './show-sheet-employe/show-sheet-employe.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';



@NgModule({
  declarations: [
    ListEmployeComponent,
    NewEmployeComponent,
    ShowSheetEmployeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    EmployeRoutingModule,
    DemoMaterialModule
  ]
})
export class EmployeModule { }
