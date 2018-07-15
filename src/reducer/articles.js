import {LOAD_ALL_ARTICLES} from '../constants';
import {arrayToMap} from '../services/CollectionUtils';

export default (articlesState = [], action) => {
    switch (action.type) {
        case LOAD_ALL_ARTICLES: {
            articlesState = arrayToMap(action.payload.articles);
            break;
        }
    }
    return articlesState;
}