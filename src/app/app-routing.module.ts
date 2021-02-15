import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'beer',
    loadChildren: () => import('./beer/beer.module').then(m => m.BeerModule)
  },
  {
    path: '',
    redirectTo: 'beer',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
