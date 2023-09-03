import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

const routes: Routes = [
  { path: 'customerdetails', component: CustomerdetailsComponent },
  { path: 'customerorders', component: CustomerordersComponent },
  { path: 'editcustomer', component: EditcustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerInformationRoutingModule { }
