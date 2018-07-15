import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {articleSelectorFactory} from '../../selectors/article'
import CommentList from '../CommentList';

function ArticleBody (props) {
    return (
        <div>
            <div>{props.article.text}</div>
            <h3>{props.article.date}</h3>
            <CommentList comments={ props.article.comments}/>
        </div>
    );
};

ArticleBody.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    articleId: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const articleSelector = articleSelectorFactory();
    return {
        article: articleSelector(state, ownProps)
    };
};

export default connect(mapStateToProps)(ArticleBody);