import React from 'react';

class Comment extends React.Component {


    render() {
        return (
            <div>
                <div>{this.props.comment.text}</div>
                <h4>{this.props.comment.user}</h4>
            </div>
        );
    };
};

export default Comment;