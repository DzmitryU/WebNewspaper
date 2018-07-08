import {combineReducers} from 'redux'
import articles from './articles'
import filter from './filter'

export default combineReducers({
    articles,
    filter
})