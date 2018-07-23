export const arrayToMap = (array) => {
    const map = array.reduce((map, element) => {
        map[element.id] = element;
        return map;
    }, {});
    return map;
};

export const mapToArray = (map) => Array.from(Object.values(map));