import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../../pkg/components/card-container/card.model';
import { DiscoverService } from './discover.service';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  cards: CardModel[] = [];
  category: string = '';

  constructor(private readonly _discoverService: DiscoverService) {}

  ngOnInit() {
    // this._discoverService.getBooks();
  }
}
