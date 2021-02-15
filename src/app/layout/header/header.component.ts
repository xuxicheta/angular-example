import { Component } from '@angular/core';
import { HeaderService } from './header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  lvl1 = this.headerService.selectLvl1();

  constructor(
    private headerService: HeaderService,
  ) {
  }
}
