import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ArticleSelect from './ArticleSelect';
import DateRangePicker from './DateRangePicker';

import {articles} from '../../data/mock';

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <DateRangePicker/>
                <ArticleSelect articles={articles}/>
            </div>
        );
    }
};

export default connect()(Filter);