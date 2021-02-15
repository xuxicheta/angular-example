import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
import { ResponseWrapper, responseWrapper } from './response-wrapper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpGet {

  constructor(
    private http: HttpClient,
  ) {
  }

  get<T>(apiUrl: string, args: Params = {}, defaultData: T = null): Observable<ResponseWrapper<T>> {
    const params = new HttpParams({
      fromObject: { ...args }
    });

    return this.http.get<T>(apiUrl, { params }).pipe(
      responseWrapper(defaultData)
    );
  }
}

