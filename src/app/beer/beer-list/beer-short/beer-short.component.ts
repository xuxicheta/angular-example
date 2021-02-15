import { Component, Input } from '@angular/core';
import { BeerItem } from '../../beer.interface';

@Component({
  selector: 'app-beer-short',
  templateUrl: './beer-short.component.html',
  styleUrls: ['./beer-short.component.css']
})
export class BeerShortComponent {
  @Input() beer: BeerItem;
}
