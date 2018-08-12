import {SUCCESS, START} from '../constants'

export default store => next => action => {
    if(!action.callAPI) {
        return next(action);
    }

    setTimeout(() => {
        console.log('Data loading...');
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
    }, 1500);

    next({...action, type: action.type + START});
}