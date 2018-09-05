import React from 'react';

import ArticleSelect from './ArticleSelect';
import DateRangePicker from './DateRangePicker';

function Filter() {
    return (
        <div>
            <DateRangePicker/>
            <ArticleSelect/>
        </div>
    );
};

export default Filter;