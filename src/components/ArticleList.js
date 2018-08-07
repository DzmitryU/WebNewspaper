import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors/articles'

import {loadComments, loadArticles} from '../ac';
import Article from './Article';
import Loader from './Loader';

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

        this.getBody = this.getBody.bind(this);
    }

    componentDidMount() {
        this.props.loadArticles();
        this.props.loadComments();
    }

    getBody() {
        let body;
        if (this.props.loading) {
            body = (<Loader/>);
        } else {
            const articleElements =
                this.props.articles.map(
                    (article) => getArticleElement(article, this.props.openItemId, this.props.toggleOpenItem)
                );
            body = (
                <ul>
                    {articleElements}
                </ul>
            );
        }
        return body;
    }

    render() {
        console.log('Update Article List');
        return this.getBody();
    }
};

ArticleList.propTypes = {
    articles: PropTypes.array,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
    loadArticles: PropTypes.func,
    loadComments: PropTypes.func,
    loading: PropTypes.bool
};

ArticleList.defaultProps = {
    articles: [],
    loading: false
};

const mapStateToProps = state => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.loading
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