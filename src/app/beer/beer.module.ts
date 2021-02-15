import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeerRoutingModule } from './beer-routing.module';
import { BeerComponent } from './beer.component';
import { BeerListModule } from './beer-list/beer-list.module';
import { BeerDetailsModule } from './beer-details/beer-details.module';


@NgModule({
  declarations: [BeerComponent],
  imports: [
    CommonModule,
    BeerRoutingModule,
    BeerListModule,
    BeerDetailsModule,
  ]
})
export class BeerModule {
}
