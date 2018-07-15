import {combineReducers} from 'redux';

import articles from './articles';
import filter from './filter';
import comments from './comments';
import counter from './counter';

export default combineReducers({
    articles,
    filter,
    comments,
    counter
});