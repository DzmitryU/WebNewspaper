import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';
import ArticleList from './ArticleList';
import Filter from './Filters';
import Counter from './Counter';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Counter/>
                <Filter/>
                <ArticleList/>
            </div>
        </Provider>
    );
}

export default App