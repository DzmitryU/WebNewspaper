import {ADD_DATE_RANGE, SELECT_ARTICLES} from '../constants';

const DEFAULT_FILTER_STATE = {
    dateRange: {from: null, to: null},
    selectedArticles: []
};

export default (filterState = DEFAULT_FILTER_STATE, action) => {
    switch (action.type) {
        case ADD_DATE_RANGE: {
            const {from, to} = action.payload.dateRange;
            filterState.dateRange.from = from || filterState.dateRange.from;
            filterState.dateRange.to = to || filterState.dateRange.to;
            break;
        }
        case SELECT_ARTICLES: {
            filterState.selectedArticles = action.payload.selectedArticles.slice(0);
            break;
        }
    }
    return filterState;
}