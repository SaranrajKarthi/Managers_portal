import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [
  { path: '', redirectTo: "/customers/card", pathMatch: "full" },
  {
    path: 'customers', component: CustomersComponent,
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  },
  { path: 'orders', component: OrdersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
