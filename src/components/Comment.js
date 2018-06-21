import React from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string,
    })
};

export default function Comment(props) {
    return (
        <div>
            <div>{props.comment.text}</div>
            <h4>{props.comment.user}</h4>
        </div>
    );
};