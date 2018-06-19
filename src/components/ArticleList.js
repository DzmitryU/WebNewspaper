import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import Accordion from "../decorators/accordion";

class ArticleList extends React.Component {
    render() {
        const articleElements = this.props.articles.map((article) => {
            return (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={article.id === this.props.openItemId}
                        toggleOpen={this.props.toggleOpenItem(article.id)}
                    />
                </li>
            )
        });

        return (
            <ul>
                {articleElements}
            </ul>
        );
    };
};

ArticleList.propTypes = {
    articles: PropTypes.array,
    openItemId: PropTypes.string.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
};

ArticleList.defaultProps = {
    articles: []
};

export default Accordion(ArticleList);