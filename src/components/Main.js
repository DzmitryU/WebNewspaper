import React from 'react';
import ArticleList from './ArticleList';
import Filter from './Filters';
import Counter from './Counter';

function Main() {
    return (
        <div>
            <Counter/>
            <Filter/>
            <ArticleList/>
        </div>
    );
}

export default Main