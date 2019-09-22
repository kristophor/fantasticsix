import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from '../ducks';
import reduxThunk from 'redux-thunk';

const middleware = applyMiddleware(reduxThunk);
const store = createStore(rootReducer, {}, middleware);

window.store = store;
export default store;