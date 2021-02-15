import { Injectable } from '@angular/core';
import { BeerItem } from './beer.interface';
import { ObservableWrapper } from '../shared/http/response-wrapper';
import { HttpGet } from '../shared/http/http-get';
import { firstItem } from '../shared/http/first-item';


@Injectable({
  providedIn: 'root'
})
export class BeerApiService {
  private readonly apiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(
    private httpGet: HttpGet,
  ) {
  }

  fetch(): ObservableWrapper<BeerItem[]> {
    return this.httpGet.get<BeerItem[]>(this.apiUrl);
  }

  fetchById(id: number): ObservableWrapper<BeerItem> {
    return this.httpGet.get<BeerItem[]>(`${this.apiUrl}/${id}`).pipe(
      firstItem(),
    );
  }
}
