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

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const commentedArticles = CommentService.fillArticles(articles, comments);
        this.props.loadArticles(commentedArticles);
    }

    shou

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
    toggleOpenItem: PropTypes.func.isRequired
};

ArticleList.defaultProps = {
    articles: []
};

const mapStateToProps = state => {
    return {
        articles: state.articles
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