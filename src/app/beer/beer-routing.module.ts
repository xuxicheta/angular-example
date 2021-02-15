import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

const routes: Routes = [
  {
    path: 'list',
    component: BeerListComponent,
  },
  {
    path: 'details',
    component: BeerDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule {
}
