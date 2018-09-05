import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {articleSelectorFactory} from '../../selectors/articles'
import CommentList from '../CommentList';

function ArticleBody (props) {
    return (
        <div>
            <div>{props.article.text}</div>
            <h3>{props.article.date}</h3>
            <CommentList
                comments={props.article.comments}
                articleId={props.articleId}
                loading={props.article.commentsLoading}
                loaded={props.article.commentsLoaded}/>
        </div>
    );
};

ArticleBody.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.string),
        loading: PropTypes.bool,
        loaded: PropTypes.bool
    }).isRequired,
    articleId: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const articleSelector = articleSelectorFactory();
    return {
        article: articleSelector(state, ownProps)
    };
};

export default connect(mapStateToProps)(ArticleBody);