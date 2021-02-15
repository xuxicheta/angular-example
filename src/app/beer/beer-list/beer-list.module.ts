import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListComponent } from './beer-list.component';
import { BeerShortComponent } from './beer-short/beer-short.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BeerListComponent, BeerShortComponent],
  exports: [
    BeerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BeerListModule { }
