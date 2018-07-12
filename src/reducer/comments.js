import {LOAD_COMMENTS} from '../constants';

export default (commentsState = [], action) => {
    switch (action.type) {
        case LOAD_COMMENTS: {
            commentsState = [...action.payload.comments];
            break;
        }
    }
    return commentsState;
}