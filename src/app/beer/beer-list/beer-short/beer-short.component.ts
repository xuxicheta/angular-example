import { Component, Input } from '@angular/core';
import { BeerItem } from '../../beer.interface';

@Component({
  selector: 'app-beer-short',
  templateUrl: './beer-short.component.html',
  styleUrls: ['./beer-short.component.css'],
  host: { class: 'block p-5 bg-white rounded-md shadow-lg sm:w-full m-3 transform cursor-pointer hover:translate-x-2 transition-all'}
})
export class BeerShortComponent {
  @Input() beer: BeerItem;
}
