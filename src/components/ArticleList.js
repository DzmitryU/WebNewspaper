import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors/articles'

import {loadArticles} from '../ac';
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
        if (!(this.props.loaded || this.props.loading)) {
            this.props.loadArticles();
        }
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
    loading: PropTypes.bool,
    loaded: PropTypes.bool
};

ArticleList.defaultProps = {
    articles: [],
    loading: false,
    loaded: false
};

const mapStateToProps = state => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadArticles: (articles) =>
            dispatch(loadArticles(articles)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Accordion(ArticleList));