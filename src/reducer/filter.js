import {SET_DATE_RANGE, SELECT_ARTICLES} from '../constants';

const DEFAULT_FILTER_STATE = {
    dateRange: {from: null, to: null},
    selectedArticles: []
};

export default (filterState = DEFAULT_FILTER_STATE, action) => {
    switch (action.type) {
        case SET_DATE_RANGE: {
            const {from, to} = action.payload.dateRange;
            return {
                ...filterState,
                dateRange: {
                    from: from || filterState.dateRange.from,
                    to: to || filterState.dateRange.to
                }
            }
        }
        case SELECT_ARTICLES: {
            return {
                ...filterState,
                selectedArticles: action.payload.selectedArticles.slice(0)
            }
        }
    }
    return filterState;
}