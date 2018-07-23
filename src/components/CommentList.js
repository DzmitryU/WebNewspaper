import React from 'react';
import PropTypes from 'prop-types';
import ToggleOpen from '../decorators/toggleOpen';

import Comment from './Comment';
import CommentForm from './CommentForm';

function getBody(comments, isOpen, articleId) {
    if (!isOpen) {
        return null;
    }
    const commentElements = comments.map((id) => {
        return (
            <li key={id}>
                <Comment commentId={id}/>
            </li>
        )
    });
    return (
        <div>
            <ul>
                {commentElements}
            </ul>
            <CommentForm articleId={articleId}/>
        </div>
    );
};

function CommentList (props) {
    const body = getBody(props.comments, props.isOpen, props.articleId);
    return (
        <div>
            <button onClick={props.toggleOpen}>
                {props.isOpen ? 'Hide comments' : 'Show comments'}
            </button>
            {body}
        </div>
    );

};

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string)
};

CommentList.defaultProps = {
    comments: []
};

export default ToggleOpen(CommentList);