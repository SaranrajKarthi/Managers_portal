import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomerinfoRoutingModule } from './card/customerinfo-routing.module';
import { CustomerInformationRoutingModule } from './card/customer-information/customer-information-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [CardComponent, ListComponent, MapViewComponent, AddMemberComponent ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    CustomerinfoRoutingModule,
    CustomerInformationRoutingModule,
    MatToolbarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAoG0v-x_8_TLyIu35Wq3JdaSlpHAtnhMU'
    })
  ]
})
export class CustomersModule { }
