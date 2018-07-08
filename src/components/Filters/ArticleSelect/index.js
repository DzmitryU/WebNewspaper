import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'
import {connect} from 'react-redux';

import 'react-select/dist/react-select.css'
import './style.css';

import {selectArticles} from '../../../ac';

class ArticleSelect extends React.Component {
    constructor(props) {
        super(props);
    };

    handleChange = (articles) => {
        this.props.selectArticles(articles);
    };

    articlesToOptions = (articles) => {
        return articles.map((article) => ({
            value: article.id, label: article.title
        }));
    };


    render() {
        return (
            <Select
                value={this.props.selectedArticles}
                onChange={this.handleChange}
                multi={true}
                options={this.articlesToOptions(this.props.articles)}
            />
        );
    }
};


// TODO define articles and selectedArticles in one place
ArticleSelect.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
    selectedArticles: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    selectArticles: PropTypes.func.isRequired
};

ArticleSelect.defaultProps = {
    articles: [],
    selectedArticles: []
};

const mapStateToProps = state => {
    return {
        articles: state.articles,
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