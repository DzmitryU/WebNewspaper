import React from 'react';
import PropTypes from 'prop-types';

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

function ArticleList(props) {
    const articleElements =
        props.articles.map((article) => getArticleElement(article, props.openItemId, props.toggleOpenItem));

    return (
        <ul>
            {articleElements}
        </ul>
    );
};

ArticleList.propTypes = {
    articles: PropTypes.array,
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
};

ArticleList.defaultProps = {
    articles: []
};

export default Accordion(ArticleList);