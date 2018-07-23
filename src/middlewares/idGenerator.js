import uuid from 'uuid/v4';

import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    if (action.type === ADD_COMMENT) {
        return next({...action, commentId: uuid()})
    }
    return next(action);
}