import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInformationRoutingModule } from './customer-information-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerordersComponent } from './customerorders/customerorders.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';


@NgModule({
  declarations: [ CustomerdetailsComponent, CustomerordersComponent, EditcustomerComponent ],
  imports: [
    CommonModule,
    CustomerInformationRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
})
export class CustomerInformationModule { }
