import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ListEmployeComponent } from './employe/list-employe/list-employe.component';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DemoMaterialModule } from './material-module';
import { EmployexeService } from './employexe.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { SecurityComponent } from './security/security.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MenuComponent,
    ToolbarComponent,
    ContentBodyComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
