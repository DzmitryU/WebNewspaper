import {LOAD_COMMENTS, ADD_COMMENT} from '../constants';
import {arrayToMap} from '../services/CollectionUtils';

export default (commentsState = [], action) => {
    switch (action.type) {
        case LOAD_COMMENTS: {
            commentsState = arrayToMap(action.payload.comments);
            break;
        }
        case ADD_COMMENT: {
            commentsState[action.commentId] = {
                ...action.payload.comment,
                id: action.commentId
            };
            break;
        }
    }
    return commentsState;
}