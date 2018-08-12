import {LOAD_COMMENTS, ADD_COMMENT, SUCCESS, START} from '../constants';
import {arrayToMap} from '../services/CollectionUtils';
import {Record, OrderedMap} from 'immutable'

const CommentsState = Record({
    loading: false,
    loaded: false,
    entries: new OrderedMap({})
});

const defaultState = new CommentsState();

const CommentRecord = Record({
    id: undefined,
    text: undefined,
    user: undefined
});

export default (commentsState = defaultState, action) => {
    switch (action.type) {
        case LOAD_COMMENTS + SUCCESS: {
            return commentsState
                .set('entries', arrayToMap(action.payload, CommentRecord))
                .set('loading', false)
                .set('loaded', true);
        }
        case LOAD_COMMENTS + START: {
            return commentsState.set('loading', true);
        }
        case ADD_COMMENT: {
            return commentsState
                .setIn(
                    ['entries', action.commentId],
                    new CommentRecord({id: action.commentId, ...action.payload.comment})
                );
        }
        default: {
            return commentsState
        }
    }
}