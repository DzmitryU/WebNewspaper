import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function Comment(props) {
    console.log('render comment: ', props.comment.id);
    return (
        <div>
            <div>{props.comment.text}</div>
            <h4>{props.comment.user}</h4>
        </div>
    );
};

Comment.propTypes = {
    commentId: PropTypes.string,
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string,
    })
};

const mapStateToProps = (state, ownProps) => {
    return {
        comment: state.comments.find(comment => comment.id === ownProps.commentId)
    }
};

export default connect(mapStateToProps)(Comment);
