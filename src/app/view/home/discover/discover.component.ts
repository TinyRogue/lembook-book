import { Component } from '@angular/core';
import { CardModel } from '../../../pkg/components/card-container/card.model';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent {
  cards: CardModel[] = [];
  category: string = '';
}
