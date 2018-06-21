import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';

function getBody (article, isOpen) {
    return isOpen ? (
            <div>
                <div>{article.text}</div>
                <h3>{article.date}</h3>
                <CommentList comments={article.commentItems}/>
            </div>)
        : null;
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
        text: PropTypes.string.isRequired,
        date: PropTypes.string,
        commentItems: PropTypes.array
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default Article;