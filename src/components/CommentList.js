import React from 'react';
import Comment from './Comment';
import ToggleOpen from '../decorators/toggleOpen';

class CommentList extends React.Component {
    getBody = () => {
        if (!this.props.isOpen) {
            return null;
        }
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

    render() {
        const body = this.getBody();

        return (
            <div>
                <button onClick={this.props.toggleOpen}>
                    {this.props.isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {body}
            </div>
        );
    };
};

CommentList.defaultProps = {
    comments: []
};

export default ToggleOpen(CommentList);