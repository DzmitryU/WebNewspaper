import {LOAD_ALL_ARTICLES, SELECT_ARTICLES, SET_DATE_RANGE} from "../constants";

export function loadAllArticles(articles) {
    return {
        type: LOAD_ALL_ARTICLES,
        payload: {articles: articles}
    }
};

export function selectArticles(articles) {
    return {
        type: SELECT_ARTICLES,
        payload: {selectedArticles: articles}
    }
};

export function setDateRange(range) {
    return {
        type: SET_DATE_RANGE,
        payload: {dateRange: range}
    }
};