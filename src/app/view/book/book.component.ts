import {Component, ElementRef, ViewChild} from "@angular/core";

type direction = 'forward' | 'backward';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss'],
})
export class BookComponent {
  pageTurned: direction  = 'backward';

  @ViewChild('book')
  private readonly book!: ElementRef;

  // login(service: 'google' | 'facebook' | 'apple' |'github') {
    // this.book.nativeElement.classList.add('jumped-in');
  // }

  blockPageTurn() {
    setTimeout(() => this.pageTurned = 'forward', 0);
  }
}
