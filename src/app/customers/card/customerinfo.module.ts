import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerinfoRoutingModule } from './customerinfo-routing.module';
import { CustomerInformationComponent } from './customer-information/customer-information.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CustomerInformationComponent
  ],
  imports: [
    CommonModule,
    CustomerinfoRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class CustomerinfoModule { }
