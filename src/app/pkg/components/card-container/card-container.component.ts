import { Component, Input } from '@angular/core';
import { CardModel } from './card.model';
import { faBomb, faBook } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent {
  @Input() sectionName = 'To może być wszystko';
  @Input() cards: CardModel[] = [
    {
      author: 'autor',
      title: 'tytuł',
      coverURL: `https://picsum.photos/1000?param=${Math.random()}`,
      genre: 'gatunek',
    },
    {
      author: 'autor',
      title: 'tytuł',
      coverURL: `https://picsum.photos/500?param=${Math.random()}`,
      genre: 'gatunek',
    },
    {
      author: 'autor',
      title: 'tytuł',
      coverURL: `https://picsum.photos/200/300?param=${Math.random()}`,
      genre: 'gatunek',
    },
    {
      author: 'autor',
      title: 'tytuł',
      coverURL: `https://picsum.photos/200/300?param=${Math.random()}`,
      genre: 'gatunek',
    },
    {
      author: 'autor',
      title: 'tytuł',
      coverURL: `https://picsum.photos/200/300?param=${Math.random()}`,
      genre: 'gatunek',
    },
    {
      author: 'autor',
      title: 'tytuł',
      coverURL: `https://picsum.photos/200/300?param=${Math.random()}`,
      genre: 'gatunek',
    },
    {
      author: 'autor',
      title: 'tytuł',
      coverURL: `https://picsum.photos/200/300?param=${Math.random()}`,
      genre: 'gatunek',
    },
  ];

  readonly heartIcon = faHeart;
  readonly bookIcon = faBook;
  readonly bombIcon = faBomb;
  readonly loadingCards = Array(20).fill(0);
}
