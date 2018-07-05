import {STORE_ALL_ARTICLES} from '../constants';

export default (articleState = [], action) => {
    switch (action.type) {
        case STORE_ALL_ARTICLES: {
            articleState = action.payload.slice(0);
            break;
        }
    }
    return articleState;
}