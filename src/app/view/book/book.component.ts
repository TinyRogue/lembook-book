import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from '@animations/slide-in';

type direction = 'forward' | 'backward';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss'],
  animations: [slideInAnimation],
})
export class BookComponent {
  pageTurned: direction = 'backward';

  @ViewChild('book')
  private readonly book!: ElementRef;

  constructor(readonly router: Router) {}

  blockPageTurn() {
    setTimeout(() => (this.pageTurned = 'forward'), 0);
  }

  async turnThePage(dir: direction) {
    this.pageTurned = dir;
    await this.router.navigate(['/']);
  }
}
