import React from 'react'
import ArticleList from './ArticleList'

import { articles } from '../data/mock'

function App() {
    return (
        <ArticleList
            articles={articles}
        />
    )
}

export default App