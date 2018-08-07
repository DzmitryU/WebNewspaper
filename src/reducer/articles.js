import {Record, OrderedMap} from 'immutable'

import {ADD_COMMENT, LOAD_ARTICLES, SUCCESS, DELETE_ARTICLE, START} from '../constants';
import {arrayToMap} from '../services/CollectionUtils';

const ArticleState = Record({
    loading: false,
    loaded: false,
    entries: new OrderedMap({})
});

const defaultState = new ArticleState();

export default (articlesState = defaultState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES + SUCCESS: {
            return articlesState
                .set('entries', arrayToMap(action.payload))
                .set('loading', false)
                .set('loaded', true);
        }
        case LOAD_ARTICLES + START: {
            return articlesState.set('loading', true);
        }
        case ADD_COMMENT: {
            articlesState[action.payload.articleId].comments.push(action.commentId);
            articlesState[action.payload.articleId] = {...articlesState[action.payload.articleId]};
            return articlesState;
        }
        case DELETE_ARTICLE: {
            return articlesState
                .set('entries', articlesState.entries.delete(action.payload))
        }
        default: {
            return articlesState;
        }
    }
}