import {LOAD_ALL_ARTICLES} from '../constants';

export default (articlesState = [], action) => {
    switch (action.type) {
        case LOAD_ALL_ARTICLES: {
            articlesState = action.payload.slice(0);
            break;
        }
    }
    return articlesState;
}