import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ArticleSelect from './ArticleSelect';
import DateRangePicker from './DateRangePicker';

class Filter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DateRangePicker/>
                <ArticleSelect articles={this.props.articles}/>
            </div>
        );
    }
};

Filter.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    )
};

Filter.defaultProps = {
    articles: []
};

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
};

export default connect(mapStateToProps)(Filter);