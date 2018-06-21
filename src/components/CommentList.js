import React from 'react';
import Comment from './Comment';
import ToggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types';

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
        <ul>
            {commentElements}
        </ul>
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