import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }

    handleButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getBody = () => {
        if (this.state.isOpen) {
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
        } else {
            return '';
        }
    };

    render() {
        const body = this.getBody();

        return (
            <div>
                <button onClick={this.handleButtonClick}>
                    {this.state.isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {body}
            </div>
        );
    };
};

export default CommentList;