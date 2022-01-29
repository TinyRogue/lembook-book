import { CategorizedBooks } from '@models/user-books-res.json';
import { createReducer, on } from '@ngrx/store';
import {
  addBookToWTRSuccess,
  cancelAddBookToWTRSuccess,
  cancelDislikeBookSuccess,
  cancelLoveBookSuccess,
  dislikeBookSuccess,
  getCategorizedBooks,
  getCategorizedBooksFailed,
  getCategorizedBooksSuccess,
  getPredictedBooks,
  getPredictedBooksFailed,
  getPredictedBooksSuccess,
  loveBookFailed,
  loveBookSuccess,
} from './discover.actions';

export interface State {
  categorizedBooks: CategorizedBooks[] | null;
  predictedBooks: CategorizedBooks | null;
  error: any;
  actionError: any;
  predictedError: any;
}

export const initialState: State = {
  categorizedBooks: null,
  predictedBooks: null,
  error: null,
  actionError: null,
  predictedError: null,
};

export const discoverReducer = createReducer(
  initialState,
  on(getCategorizedBooks, (state) => ({
    ...state,
    error: null,
    actionError: null,
  })),
  on(getCategorizedBooksSuccess, (state, { slices }) => ({
    ...state,
    categorizedBooks: slices,
    error: null,
    actionError: null,
  })),
  on(getCategorizedBooksFailed, (state, { error }) => ({
    ...state,
    categorizedBooks: null,
    error,
    actionError: null,
  })),
  on(getPredictedBooks, (state) => ({
    ...state,
    predictedError: null,
  })),
  on(getPredictedBooksSuccess, (state, { books, genre }) => ({
    ...state,
    predictedBooks: { genre, books },
  })),
  on(getPredictedBooksFailed, (state, { error }) => ({
    ...state,
    predictedBooks: null,
    predictedError: error,
  })),
  on(loveBookFailed, (state, { error }) => ({
    ...state,
    error: null,
    actionError: error,
  })),
  on(loveBookSuccess, (state, { book, bookAction }) => ({
    ...state,
    actionError: null,
    predictedBooks: {
      genre: state.predictedBooks?.genre,
      books: state.predictedBooks?.books?.map((value) =>
        value.uid === book.uid ? { ...value, inList: bookAction } : value
      ),
    },
    categorizedBooks:
      state.categorizedBooks?.map((slice: CategorizedBooks) => {
        const booklist = slice?.books ?? [];
        const updatedBookList: CategorizedBooks = {
          genre: slice.genre,
          books: booklist?.map((value) =>
            value.uid === book.uid ? { ...value, inList: bookAction } : value
          ),
        };
        return updatedBookList;
      }) ?? null,
  })),
  on(dislikeBookSuccess, (state, { book, bookAction }) => ({
    ...state,
    actionError: null,
    predictedBooks: {
      genre: state.predictedBooks?.genre,
      books: state.predictedBooks?.books?.map((value) =>
        value.uid === book.uid ? { ...value, inList: bookAction } : value
      ),
    },
    categorizedBooks:
      state.categorizedBooks?.map((slice: CategorizedBooks) => {
        const booklist = slice?.books ?? [];
        const updatedBookList: CategorizedBooks = {
          genre: slice.genre,
          books: booklist?.map((value) =>
            value.uid === book.uid ? { ...value, inList: bookAction } : value
          ),
        };
        return updatedBookList;
      }) ?? null,
  })),
  on(addBookToWTRSuccess, (state, { book, bookAction }) => ({
    ...state,
    actionError: null,
    predictedBooks: {
      genre: state.predictedBooks?.genre,
      books: state.predictedBooks?.books?.map((value) =>
        value.uid === book.uid ? { ...value, inList: bookAction } : value
      ),
    },
    categorizedBooks:
      state.categorizedBooks?.map((slice: CategorizedBooks) => {
        const booklist = slice?.books ?? [];
        const updatedBookList: CategorizedBooks = {
          genre: slice.genre,
          books: booklist?.map((value) =>
            value.uid === book.uid ? { ...value, inList: bookAction } : value
          ),
        };
        return updatedBookList;
      }) ?? null,
  })),
  on(cancelLoveBookSuccess, (state, { book, bookAction }) => ({
    ...state,
    actionError: null,
    predictedBooks: {
      genre: state.predictedBooks?.genre,
      books: state.predictedBooks?.books?.map((value) =>
        value.uid === book.uid ? { ...value, inList: bookAction } : value
      ),
    },
    categorizedBooks:
      state.categorizedBooks?.map((slice: CategorizedBooks) => {
        const booklist = slice?.books ?? [];
        const updatedBookList: CategorizedBooks = {
          genre: slice.genre,
          books: booklist?.map((value) =>
            value.uid === book.uid ? { ...value, inList: bookAction } : value
          ),
        };
        return updatedBookList;
      }) ?? null,
  })),
  on(cancelDislikeBookSuccess, (state, { book, bookAction }) => ({
    ...state,
    actionError: null,
    predictedBooks: {
      genre: state.predictedBooks?.genre,
      books: state.predictedBooks?.books?.map((value) =>
        value.uid === book.uid ? { ...value, inList: bookAction } : value
      ),
    },
    categorizedBooks:
      state.categorizedBooks?.map((slice: CategorizedBooks) => {
        const booklist = slice?.books ?? [];
        const updatedBookList: CategorizedBooks = {
          genre: slice.genre,
          books: booklist?.map((value) =>
            value.uid === book.uid ? { ...value, inList: bookAction } : value
          ),
        };
        return updatedBookList;
      }) ?? null,
  })),
  on(cancelAddBookToWTRSuccess, (state, { book, bookAction }) => ({
    ...state,
    actionError: null,
    predictedBooks: {
      genre: state.predictedBooks?.genre,
      books: state.predictedBooks?.books?.map((value) =>
        value.uid === book.uid ? { ...value, inList: bookAction } : value
      ),
    },
    categorizedBooks:
      state.categorizedBooks?.map((slice: CategorizedBooks) => {
        const booklist = slice?.books ?? [];
        const updatedBookList: CategorizedBooks = {
          genre: slice.genre,
          books: booklist?.map((value) =>
            value.uid === book.uid ? { ...value, inList: bookAction } : value
          ),
        };
        return updatedBookList;
      }) ?? null,
  }))
);
