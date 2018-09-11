import React from 'react';
import Articles from './Articles';
import Filter from './Filters';
import Counter from './Counter';

function Main() {
    return (
        <div>
            <Counter/>
            <Filter/>
            <Articles/>
        </div>
    );
}

export default Main