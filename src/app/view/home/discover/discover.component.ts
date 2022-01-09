import { Component } from '@angular/core';
import { CardModel } from '../../../pkg/components/card-container/card.model';
import { DiscoverService } from './discover.service';
import { ToastService } from '../../../pkg/components/toast/toast.service';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
})
export class DiscoverComponent {
  // discoveredBooks$: Observable<CategorizedBooks[]>;
  cards: CardModel[] = [];
  category: string = '';

  constructor(
    private readonly _discoverService: DiscoverService,
    private readonly _toastService: ToastService
  ) {}
}
