import {createSelector} from "reselect";

const commentsGetter = state => state.comments.entries;
const commentIdGetter = (state, props) => props.commentId;

export const commentSelectorFactory =
    () => createSelector(commentsGetter, commentIdGetter, (comments, commentId) => comments.get(commentId));
