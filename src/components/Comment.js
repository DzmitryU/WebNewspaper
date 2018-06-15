import React from 'react';

export default function Comment(props) {
    return (
        <div>
            <div>{props.comment.text}</div>
            <h4>{props.comment.user}</h4>
        </div>
    );
};