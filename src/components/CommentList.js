import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        const commentElements = this.props.comments.map((comment) => {
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
};

export default CommentList;