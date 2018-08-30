import {
    DELETE_ARTICLE,
    LOAD_ARTICLES, START
} from '../constants';

import {getData} from '../services/utils/Request'

const ARTICLE_URL = '/api/article';

export function loadArticles() {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLES + START
        });
        getData({url: ARTICLE_URL, type: LOAD_ARTICLES}, dispatch);
    };
};

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: id
    }
}