import { Injectable } from '@angular/core';
import { BeerItem } from './beer.interface';
import { ObservableWrapper, responseWrapper } from '../shared/http/response-wrapper';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerApiService {
  private readonly apiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(
    private http: HttpClient,
  ) {
  }

  fetch(): ObservableWrapper<BeerItem[]> {
    return this.http.get<BeerItem[]>(this.apiUrl).pipe(
      responseWrapper(),
    );
  }

  fetchById(id: number): ObservableWrapper<BeerItem> {
    return this.http.get<BeerItem[]>(`${this.apiUrl}/${id}`).pipe(
      map(resp => resp[0]),
      responseWrapper(),
    );
  }
}
