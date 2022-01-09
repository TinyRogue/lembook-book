import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { slideInAnimation } from '@animations/slide-in';

type direction = 'forward' | 'backward';
type state = 'default' | 'login' | 'register';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss'],
  animations: [slideInAnimation],
})
export class BookComponent implements OnInit {
  pageTurned: direction = 'backward';
  loading: boolean = false;
  option: state = 'default';

  @ViewChild('book')
  private readonly _book!: ElementRef;

  ngOnInit() {
    //TODO: send to login with JWT and reroute if successful
  }

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
