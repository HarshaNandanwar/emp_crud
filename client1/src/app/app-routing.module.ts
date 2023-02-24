import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './home_view/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './home_view/employee-details/employee-details.component';
import { EmployeeListComponent } from './home_view/employee-list/employee-list.component';
import { LoginComponent } from './home_view/login/login.component';
import { UpdateEmployeeComponent } from './home_view/update-employee/update-employee.component';
import{AuthguardGuard} from './guard-service/authguard.guard';

const routes: Routes = [
  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
    path:'create-employee',
    canActivate:[AuthguardGuard],
    component:CreateEmployeeComponent
  },
  {
    path:'update-employee/:id',
    component:UpdateEmployeeComponent
  },
  {
    path:'employees-details/:id',
    component:EmployeeDetailsComponent
  },
  {
    path:"",
    redirectTo:"employees",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
