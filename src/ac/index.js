import {LOAD_ALL_ARTICLES, SELECT_ARTICLES, SET_DATE_RANGE, LOAD_COMMENTS, INCREMENT} from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function loadAllArticles(articles) {
    return {
        type: LOAD_ALL_ARTICLES,
        payload: {articles}
    }
};

export function selectArticles(articles) {
    return {
        type: SELECT_ARTICLES,
        payload: {selectedArticles: articles}
    }
};

export function loadComments(comments) {
    return {
        type: LOAD_COMMENTS,
        payload: {comments}
    }
};

export function setDateRange(range) {
    return {
        type: SET_DATE_RANGE,
        payload: {dateRange: range}
    }
};