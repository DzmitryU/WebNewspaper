import React from 'react';
import store from '../store';
import {Provider} from 'react-redux';
import ArticleList from './ArticleList';
import DateRangePicker from './Filters/DateRangePicker';
import ArticleSelect from './Filters/ArticleSelect';

import { articles } from '../data/mock';

function App() {
    return (
        <Provider store={store}>
            <div>
                <DateRangePicker/>
                <ArticleSelect articles={articles}/>
                <ArticleList/>
            </div>
        </Provider>
    );
}

export default App