import { LOAD_COMMENTS, ADD_COMMENT, SUCCESS } from '../constants';
import {arrayToMap} from '../services/utils/Collections';
import {Record, OrderedMap} from 'immutable'

const CommentsState = Record({
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
                .set('entries', commentsState.entries.concat(arrayToMap(action.payload, CommentRecord)));
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