import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';
import ArticleList from './ArticleList';
import Filter from './Filters';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Filter/>
                <ArticleList/>
            </div>
        </Provider>
    );
}

export default App