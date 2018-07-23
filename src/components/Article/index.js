import React from 'react';
import PropTypes from 'prop-types';
import ArticleBody from './ArticleBody'

function getBody (article, isOpen) {
    return isOpen ? (<ArticleBody articleId={article.id} />) : null;
};

function Article (props) {

    const body = getBody(props.article, props.isOpen);
    return (
        <div>
            <h1>
                {props.article.title}
                <button onClick={props.toggleOpen}>
                    {props.isOpen ? 'Close' : 'Open'}
                </button>
            </h1>
            {body}
        </div>
    );
};

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        date: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default Article;