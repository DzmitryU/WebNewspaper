import React from 'react';
import PropTypes from 'prop-types';
import ToggleOpen from '../decorators/toggleOpen';

import Comment from './Comment';
import CommentForm from './CommentForm';

function getBody(comments, isOpen) {
    if (!isOpen) {
        return null;
    }
    const commentElements = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <Comment comment={comment}/>
            </li>
        )
    });
    return (
        <div>
            <ul>
                {commentElements}
            </ul>
            <CommentForm/>
        </div>
    );
};

function CommentList (props) {
    const body = getBody(props.comments, props.isOpen);
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
    comments: PropTypes.array
};

CommentList.defaultProps = {
    comments: []
};

export default ToggleOpen(CommentList);