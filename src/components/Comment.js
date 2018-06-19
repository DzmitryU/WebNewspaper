import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.comment.text}</div>
                <h4>{this.props.comment.user}</h4>
            </div>
        );
    };
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string,
    })
};

export default Comment;