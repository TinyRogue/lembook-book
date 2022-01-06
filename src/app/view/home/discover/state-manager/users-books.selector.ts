import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserBooksRes } from '@models/user-books-res.json';

export const selectDiscoveredBooks = createSelector(
  createFeatureSelector<UserBooksRes>('discoveredBooks'),
  (state: UserBooksRes) => state.slices
);
