import {OrderedMap} from 'immutable';

export const arrayToMap = (array) => {
    const map = array.reduce((map, element) => {
        return map.set(element.id, element);
    }, new OrderedMap({}));
    return map;
};

export const mapToArray = (map) => map.valueSeq().toArray();