import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { MapViewComponent } from './map-view/map-view.component';

const routes: Routes = [
  // { path: '', redirectTo: "/customers/card", pathMatch: "full" },
  {
    path: 'card',
    component: CardComponent,
    loadChildren: () => import('./card/customerinfo.module').then(m => m.CustomerinfoModule)
  },
  { path: 'list', component: ListComponent },
  { path: 'map-view', component: MapViewComponent },
  { path: 'add-member', component: AddMemberComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
