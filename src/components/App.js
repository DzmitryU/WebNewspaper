import React from 'react'
import store from '../store'
import {Provider} from 'react-redux'
import ArticleList from './ArticleList'
import CommentService from '../services/CommentService'
import DateRangePicker from './Filters/DateRangePicker'
import ArticleSelect from './Filters/ArticleSelect'

import { articles, comments } from '../data/mock'

function App() {
    const commentedArticles = CommentService.fillArticles(articles, comments);
    return (
        <Provider store={store}>
            <div>
                <DateRangePicker/>
                <ArticleSelect articles={articles}/>
                <ArticleList
                    articles={commentedArticles}
                />
            </div>
        </Provider>
    );
}

export default App