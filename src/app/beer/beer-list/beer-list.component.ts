import { Component } from '@angular/core';
import { BeerApiService } from '../beer-api.service';
import { BeerItem } from '../beer.interface';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {
  beers = this.beerApiService.fetch();

  constructor(
    private beerApiService: BeerApiService,
  ) {
  }

  trackBy(i: number, el: BeerItem): number {
    return el.id;
  }
}
