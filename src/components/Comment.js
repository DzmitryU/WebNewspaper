import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from '../selectors/comments';

function getBody(comment) {
    if (!comment) {
        return null;
    }
    return (
        <div>
            <div>{comment.text}</div>
            <h4>{comment.user}</h4>
        </div>
    )
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render comment: ', this.props.commentId);
        const body = getBody(this.props.comment);
        return body;
    }
};

Comment.propTypes = {
    commentId: PropTypes.string,
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string,
    })
};

const mapStateToProps = (state, ownProps) => {
    const commentSelector = commentSelectorFactory();
    return {
        comment: commentSelector(state, ownProps)
    }
};

export default connect(mapStateToProps)(Comment);
