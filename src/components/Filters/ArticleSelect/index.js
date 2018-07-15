import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import {connect} from 'react-redux';

import 'react-select/dist/react-select.css'
import './style.css';

import {selectArticles} from '../../../ac';
import {articleOptionsSelector} from '../../../selectors/article'

class ArticleSelect extends React.Component {
    constructor(props) {
        super(props);
    };

    handleChange = (articles) => {
        this.props.selectArticles(articles.map(article => article.value));
    };



    render() {
        return (
            <Select
                value={this.props.selectedArticles}
                onChange={this.handleChange}
                multi={true}
                options={this.props.articleOptions}
            />
        );
    }
};


// TODO define articles and selectedArticles in one place
ArticleSelect.propTypes = {
    articleOptions: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    selectedArticles: PropTypes.arrayOf(PropTypes.string),
    selectArticles: PropTypes.func.isRequired
};

ArticleSelect.defaultProps = {
    articleOptions: [],
    selectedArticles: []
};

const mapStateToProps = state => {
    return {
        articleOptions: articleOptionsSelector(state),
        selectedArticles: state.filter.selectedArticles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectArticles: (articles) => {
            dispatch(selectArticles(articles))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleSelect);