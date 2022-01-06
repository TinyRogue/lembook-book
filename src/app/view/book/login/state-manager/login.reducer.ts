import { createReducer, on } from '@ngrx/store';
import { saveUserMetadata } from './login.action';

export const initialState: string = '';

export const loginMetadataReducer = createReducer(
  initialState,
  on(saveUserMetadata, (state, { uid }) => uid)
);
