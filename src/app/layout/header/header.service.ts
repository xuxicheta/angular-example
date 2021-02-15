import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

export interface HeaderLink {
  text: string;
  path: string|string[];
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private lvl1 = new ReplaySubject<HeaderLink>(1);

  setLvl1(link: HeaderLink): void {
    this.lvl1.next(link);
  }

  selectLvl1(): Observable<HeaderLink> {
    return this.lvl1.asObservable();
  }
}
