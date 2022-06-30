import { createStore } from 'redux';
import { reducers } from './reducers';

export const Store = createStore(reducers);

console.log(Store.getState());
