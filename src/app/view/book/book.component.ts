import {Component} from "@angular/core";

type direction = 'forward' | 'backward';

@Component({
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.scss'],
})
export class BookComponent {
  pageTurned: direction  = 'backward';
}
