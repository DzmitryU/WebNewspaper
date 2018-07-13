import {LOAD_COMMENTS} from '../constants';

export default (commentsState = [], action) => {
    switch (action.type) {
        case LOAD_COMMENTS: {
            commentsState = action.payload.comments.reduce((map, comment) => {
                map[comment.id] = comment;
                return map;
            }, {});
            break;
        }
    }
    return commentsState;
}