import uuid from 'uuid/v4';

import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    if (action.generateId) {
        return next({...action, commentId: uuid()})
    }
    return next(action);
}