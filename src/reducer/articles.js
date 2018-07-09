import {LOAD_ALL_ARTICLES} from '../constants';

export default (articlesState = [], action) => {
    switch (action.type) {
        case LOAD_ALL_ARTICLES: {
            articlesState = [...action.payload.articles];
            break;
        }
    }
    return articlesState;
}