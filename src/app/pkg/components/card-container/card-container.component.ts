import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faBomb, faBook } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Book } from '@models/user-books-res.json';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent {
  @Input() sectionName: string = 'To może być wszystko';
  @Input() books: Book[] | null = null;
  @Input() templateText: string = 'Jeszcze nie masz tu żadnej książki.';
  @Output() cardClick = new EventEmitter<never>();
  @Output() loveClick = new EventEmitter<never>();
  @Output() dislikeClick = new EventEmitter<never>();
  @Output() wantToReadClick = new EventEmitter<never>();
  readonly heartIcon = faHeart;
  readonly bookIcon = faBook;
  readonly bombIcon = faBomb;
  readonly loadingCards = Array(20).fill(0);

  getCoverURL(id: string | undefined) {
    return id
      ? `https://covers.openlibrary.org/b/ID/${id}-M.jpg`
      : '../../../assets/photo/cover.png';
  }
}
