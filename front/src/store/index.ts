import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducer';

export const store = createStore(rootReducers, applyMiddleware(thunk));
