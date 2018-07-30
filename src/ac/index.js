import {
    LOAD_ALL_ARTICLES, LOAD_ARTICLES, SELECT_ARTICLES, SET_DATE_RANGE, LOAD_COMMENTS, INCREMENT, ADD_COMMENT
} from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function loadArticles() {
    return {
        type: LOAD_ARTICLES,
        callAPI: '/api/article'
    }
};

export function selectArticles(articles) {
    return {
        type: SELECT_ARTICLES,
        payload: {selectedArticles: articles}
    }
};

export function loadComments() {
    return {
        type: LOAD_COMMENTS,
        callAPI: '/api/comment'
    }
};

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId}
    }
}

export function setDateRange(range) {
    return {
        type: SET_DATE_RANGE,
        payload: {dateRange: range}
    }
};