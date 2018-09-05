import {
    LOAD_COMMENTS, ADD_COMMENT, START
} from '../constants';
import { getData } from '../services/utils/Request'

const COMMENT_URL = '/api/comment';

export function loadArticleComments(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            id
        });
        getData({url: COMMENT_URL + `?article=${id}`, type: LOAD_COMMENTS, id: id}, dispatch);
    }
};

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}