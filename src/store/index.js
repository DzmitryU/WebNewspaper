import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducer';
import idGenerator from '../middlewares/idGenerator'


const store = createStore(reducer, composeWithDevTools(applyMiddleware(idGenerator)));

export default store;