import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors/articles'

import {loadComments, loadArticles} from '../ac';
import Article from './Article';

import Accordion from '../decorators/accordion';

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
        this.props.loadArticles();
        this.props.loadComments();
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
    loadArticles: PropTypes.func,
    loadComments: PropTypes.func
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
            dispatch(loadArticles(articles)),
        loadComments: (comments) =>
            dispatch(loadComments(comments)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accordion(ArticleList));