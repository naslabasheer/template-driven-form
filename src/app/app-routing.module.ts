import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { EmployeeComponent } from './components/employee/employee.component';
import { DatatableComponent } from './datatable/datatable.component';


const routes: Routes = 
[

  {path:'employee',component:EmployeeComponent},
  {path:'user',component:DatatableComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
