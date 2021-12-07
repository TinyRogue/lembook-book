import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from '@animations/slide-in';

type direction = 'forward' | 'backward';
type state = 'default' | 'login' | 'register';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss'],
  animations: [slideInAnimation],
})
export class BookComponent {
  pageTurned: direction = 'backward';
  loading: boolean = false;
  option: state = 'default';

  @ViewChild('book')
  private readonly _book!: ElementRef;

  constructor(readonly router: Router) {}

  blockPageTurn(reason: state) {
    setTimeout(() => (this.pageTurned = 'forward'), 0);
    this.option = reason;
  }

  async turnThePage(dir: direction) {
    this.pageTurned = dir;
    this.option = 'default';
  }

  setLoader(turnOn: boolean) {
    if (turnOn) {
      this.loading = true;
    } else {
      setTimeout(() => (this.loading = false), 500);
    }
  }
}
