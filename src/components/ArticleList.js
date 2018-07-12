import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';

import {loadAllArticles, loadComments} from '../ac';
import Article from './Article';
import Accordion from '../decorators/accordion';

import {articles, comments} from '../data/mock';
import CommentService from '../services/CommentService';


function getArticleElement(article, openItemId, toggleOpenItem) {
    return (
        <li key={article.id}>
            <Article
                article={article}
                isOpen={article.id === openItemId}
                toggleOpen={toggleOpenItem(article.id)}
            />
        </li>
    );
}

function validSelected(articles, article) {
    return (
        articles.length == 0 ||
        articles.includes(article.id)
    );
}

function validDateRange(range, article) {
    return (
        !range.from ||
        !range.to ||
        (
            moment(range.from).isBefore(article.date) &&
            moment(range.to).isAfter(article.date)
        )
    )
}

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const commentedArticles = CommentService.fillArticles(articles, comments);
        this.props.loadArticles(commentedArticles);
        this.props.loadComments(comments);
    }

    render() {
        const articleElements =
            this.props.articles.map(
                (article) => getArticleElement(article, this.props.openItemId, this.props.toggleOpenItem)
            );

        return (
            <ul>
                {articleElements}
            </ul>
        );
    }
};

ArticleList.propTypes = {
    articles: PropTypes.array,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
    loadAllArticles: PropTypes.func,
    loadArticles: PropTypes.func
};

ArticleList.defaultProps = {
    articles: []
};

const mapStateToProps = state => {
    return {
        articles: state.articles.filter(
            (article) => {
                return (
                    validSelected(state.filter.selectedArticles, article) &&
                    validDateRange(state.filter.dateRange, article)
                );
            }
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadArticles: (articles) =>
            dispatch(loadAllArticles(articles)),
        loadComments: (comments) =>
            dispatch(loadComments(comments))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accordion(ArticleList));