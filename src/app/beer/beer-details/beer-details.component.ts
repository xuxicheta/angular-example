import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { BeerApiService } from '../beer-api.service';
import { ObservableWrapper, ResponseWrapper } from '../../shared/http/response-wrapper';
import { BeerItem } from '../beer.interface';
import { HeaderLinkService } from '../../layout/header/header-link.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  host: { class: 'border-b block'},
})
export class BeerDetailsComponent implements OnDestroy {
  id$ = this.route.queryParamMap.pipe(
    map(paramMap => +paramMap.get('id'))
  );
  beer = this.fetchBeer();

  constructor(
    private route: ActivatedRoute,
    private beerApiService: BeerApiService,
    private headerService: HeaderLinkService,
  ) {
  }

  ngOnDestroy(): void {
    this.headerService.set(null);
  }

  fetchBeer(): ObservableWrapper<BeerItem> {
    return this.id$.pipe(
      filter(Boolean),
      switchMap((id: number) => this.beerApiService.fetchById(id)),
      tap(resp => this.setHeaderLink(resp))
    );
  }

  private setHeaderLink(beer: ResponseWrapper<BeerItem>): void {
    if (beer?.data) {
      this.headerService.set({
        path: ['/', 'beer', 'details', `${beer.data.id}`],
        text: beer.data.name,
      });
    }
  }

}
