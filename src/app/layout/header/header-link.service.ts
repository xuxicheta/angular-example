import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export interface HeaderLink {
  text: string;
  path: string|string[];
}

@Injectable({
  providedIn: 'root'
})
export class HeaderLinkService {
  private headerLink = new ReplaySubject<HeaderLink>(1);

  set(link: HeaderLink): void {
    this.headerLink.next(link);
  }

  select(): Observable<HeaderLink> {
    return this.headerLink.asObservable();
  }
}
