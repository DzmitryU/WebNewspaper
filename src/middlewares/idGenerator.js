import uuid from 'uuid/v4';

export default store => next => action => {
    if (action.type.generateId) {
        return next({...action, id: uuid()})
    } else {
        return next(action);
    }
}