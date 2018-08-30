import {SUCCESS, FAIL} from "../../constants";

const DELAY = 1500;

export const getData = (action, callback) => {
    setTimeout(() => {
        console.log(`Data ${action.type} loading...`);
        fetch(action.url)
            .then(response => response.json())
            .catch((err) => {
                callback({...action, payload: err, type: action.type + FAIL});
            })
            .then((data) => {
                console.log(data);
                callback({...action, payload: data, type: action.type + SUCCESS});
            });
    }, DELAY);
};