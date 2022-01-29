import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '@models/user-books-res.json';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pkg-book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.scss'],
})
export class BookDetailsComponent {
  @Input() book?: Book;
  @Output() closeModalEmitter = new EventEmitter<never>();
  readonly closeIcon = faAngleLeft;

  hideModal = () => this.closeModalEmitter.emit();

  getCoverURL(id: string | undefined) {
    return id
      ? `https://covers.openlibrary.org/b/ID/${id}-M.jpg`
      : '../../../assets/photo/cover.png';
  }
}
