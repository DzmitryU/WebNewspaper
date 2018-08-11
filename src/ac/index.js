import {
    LOAD_ARTICLES, SELECT_ARTICLES, SET_DATE_RANGE, LOAD_COMMENTS, INCREMENT, ADD_COMMENT, DELETE_ARTICLE
} from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: id
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
        payload: {comment, articleId},
        generateId: true
    }
}

export function setDateRange(range) {
    return {
        type: SET_DATE_RANGE,
        payload: {dateRange: range}
    }
};