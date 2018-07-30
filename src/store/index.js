import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducer';
import idGenerator from '../middlewares/idGenerator'
import api from '../middlewares/api'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(idGenerator, api)));

export default store;