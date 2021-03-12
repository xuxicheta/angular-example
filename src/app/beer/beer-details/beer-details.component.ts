import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { BeerApiService } from '../beer-api.service';
import { ObservableWrapper, ResponseWrapper } from '../../shared/http/response-wrapper';
import { BeerItem } from '../beer.interface';
import { HeaderService } from '../../layout/header/header.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  host: { class: 'border-b block'},
})
export class BeerDetailsComponent implements OnDestroy {
  beer = this.fetchBeer();

  constructor(
    private route: ActivatedRoute,
    private beerApiService: BeerApiService,
    private headerService: HeaderService,
  ) {
  }

  ngOnDestroy(): void {
    this.headerService.setLvl1(null);
  }

  fetchBeer(): ObservableWrapper<BeerItem> {
    return this.route.queryParamMap.pipe(
      switchMap(paramMap => this.beerApiService.fetchById(+paramMap.get('id'))),
      tap(resp => this.setLvl1(resp))
    );
  }

  private setLvl1(beer: ResponseWrapper<BeerItem>): void {
    if (beer?.data) {
      this.headerService.setLvl1({
        path: ['/', 'beer', 'details', `${beer.data.id}`],
        text: beer.data.name,
      });
    }
  }

}
