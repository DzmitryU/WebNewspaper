import {LOAD_ARTICLES, SUCCESS, LOAD_COMMENTS} from '../constants'

export default store => next => action => {
    switch (action.type) {
        case LOAD_ARTICLES:
        case LOAD_COMMENTS: {
            fetch(action.callAPI)
                .then(response => response.json())
                .catch((err) => {
                    console.log(err);
                    return [];
                })
                .then((data) => {
                    console.log(data);
                    next({...action, payload: data, type: action.type + SUCCESS});
                });
        }
        default: {
            return next(action)
        }
    }
}