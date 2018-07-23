import {LOAD_ALL_ARTICLES, ADD_COMMENT} from '../constants';
import {arrayToMap} from '../services/CollectionUtils';

export default (articlesState = {}, action) => {
    switch (action.type) {
        case LOAD_ALL_ARTICLES: {
            articlesState = arrayToMap(action.payload.articles);
            break;
        }
        case ADD_COMMENT: {
            articlesState[action.payload.articleId].comments.push(action.commentId);
            articlesState[action.payload.articleId] = {...articlesState[action.payload.articleId]};
            break;
        }
    }
    return articlesState;
}