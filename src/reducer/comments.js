import {LOAD_COMMENTS} from '../constants';
import {arrayToMap} from '../services/CollectionUtils';

export default (commentsState = [], action) => {
    switch (action.type) {
        case LOAD_COMMENTS: {
            commentsState = arrayToMap(action.payload.comments);
            break;
        }
    }
    return commentsState;
}