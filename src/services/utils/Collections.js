import {OrderedMap, Map} from 'immutable';

export const arrayToMap = (array, DateRecord = Map) => {
    const map = array.reduce((map, element) => {
        return map.set(element.id, new DateRecord(element));
    }, new OrderedMap({}));
    return map;
};

export const mapToArray = (map) => map.valueSeq().toArray();