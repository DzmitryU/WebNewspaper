import {LOAD_ALL_ARTICLES, SELECT_ARTICLES} from "../constants";

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