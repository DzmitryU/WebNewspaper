import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors/article'

import {loadAllArticles, loadComments} from '../ac';
import Article from './Article';

import Accordion from '../decorators/accordion';

import {articles, comments} from '../data/mock';

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
        this.props.loadArticles(articles);
        this.props.loadComments(comments);
    }

    render() {
        console.log('Update Article List');
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
        articles: filtratedArticlesSelector(state)
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