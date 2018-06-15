import React from 'react'
import ArticleList from './ArticleList'
import CommentService from '../services/CommentService'

import { articles, comments } from '../data/mock'

function App() {
    const commentedArticles = CommentService.fillArticles(articles, comments);
    return (
        <ArticleList
            articles={commentedArticles}
        />
    )
}

export default App