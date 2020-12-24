import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDelDepComponent } from './Department/show-del-dep/show-del-dep.component';
import { AddEditDepComponent } from './Department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowDelEmpComponent } from './Employee/show-del-emp/show-del-emp.component';
import { AddEditEmpComponent } from './Employee/add-edit-emp/add-edit-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDelDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowDelEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
