import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInformationComponent } from './customer-information/customer-information.component';

const routes: Routes = [
  {
    path: 'customer-information', component: CustomerInformationComponent,
    loadChildren: () => import('./customer-information/customer-information.module').then(m => m.CustomerInformationModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerinfoRoutingModule { }
