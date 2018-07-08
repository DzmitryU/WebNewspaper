import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadAllArticles} from '../ac';

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
            (Date.parse(range.from) <= Date.parse(article.date)) &&
            (Date.parse(range.to) >= Date.parse(article.date))
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
    }

    render() {
        const articleElements =
            this.props.articles
                .filter(
                    (article) => {
                        return (
                            validSelected(this.props.selectedArticlesValues, article) &&
                            validDateRange(this.props.dateRange, article)
                        );
                    }
                )
                .map(
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
    selectedArticlesValues: PropTypes.array,
    dateRange: PropTypes.object.isRequired
};

ArticleList.defaultProps = {
    articles: [],
    selectedArticlesValues: []
};

const mapStateToProps = state => {
    return {
        articles: state.articles,
        selectedArticlesValues: state.filter.selectedArticles.map(article => article.value),
        dateRange: state.filter.dateRange
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadArticles: (articles) =>
            dispatch(loadAllArticles(articles))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accordion(ArticleList));