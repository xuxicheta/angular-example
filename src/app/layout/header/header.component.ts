import { Component } from '@angular/core';
import { HeaderLinkService } from './header-link.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerLink$ = this.headerLinkService.select();

  constructor(
    private headerLinkService: HeaderLinkService,
  ) {
  }
}
