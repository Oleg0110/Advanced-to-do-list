import { combineReducers } from 'redux';
import { noteReducer } from './noteReducer';
import { itemReducer } from './itemReducer';

export const rootReducers = combineReducers({
  note: noteReducer,
  item: itemReducer,
});

export type RootState = ReturnType<typeof rootReducers>;
