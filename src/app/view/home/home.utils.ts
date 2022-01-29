import { Injectable } from '@angular/core';
import { Book } from '@models/user-books-res.json';

@Injectable()
export class HomeUtils {
  private showModal = false;
  private bookDetails?: Book;

  get modalVisible() {
    return this.showModal;
  }

  get book() {
    return this.bookDetails;
  }

  showBookModal(book: Book) {
    document.body.style.overflow = 'hidden';
    this.bookDetails = book;
    this.showModal = true;
  }

  hideBookModal() {
    document.body.style.overflow = 'auto';
    this.bookDetails = undefined;
    this.showModal = false;
  }
}
