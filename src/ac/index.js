import {LOAD_ALL_ARTICLES} from "../constants";

export function loadAllArticles(articles) {
    return {
        type: LOAD_ALL_ARTICLES,
        payload: articles
    }
};