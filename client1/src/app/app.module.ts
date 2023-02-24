import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './home_view/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './home_view/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './home_view/update-employee/update-employee.component';
import { EmployeeListComponent } from './home_view/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './home_view/login/login.component';
import { AuthguardGuard } from './guard-service/authguard.guard';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    EmployeeListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
