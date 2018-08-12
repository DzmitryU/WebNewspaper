import {Record, OrderedMap} from 'immutable'

import {ADD_COMMENT, LOAD_ARTICLES, SUCCESS, DELETE_ARTICLE, START} from '../constants';
import {arrayToMap} from '../services/CollectionUtils';

const ArticlesState = Record({
    loading: false,
    loaded: false,
    entries: new OrderedMap({})
});

const ArticleRecord = Record({
    id: undefined,
    title: '',
    text: undefined,
    date: undefined,
    comments: [],
    commentsLoading: false,
    commentsLoaded: false
});

const defaultState = new ArticlesState();

export default (articlesState = defaultState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES + SUCCESS: {
            return articlesState
                .set('entries', arrayToMap(action.payload, ArticleRecord))
                .set('loading', false)
                .set('loaded', true);
        }
        case LOAD_ARTICLES + START: {
            return articlesState.set('loading', true);
        }
        case ADD_COMMENT: {
            return articlesState
                .updateIn(
                    ['entries', action.payload.articleId, 'comments'],
                    comments => comments.concat(action.commentId)
                );
        }
        case DELETE_ARTICLE: {
            return articlesState
                .deleteIn(['entries', action.payload])
        }
        default: {
            return articlesState;
        }
    }
}