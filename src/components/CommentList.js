import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ToggleOpen from '../decorators/toggleOpen';
import {loadComments} from '../ac';

import Comment from './Comment';
import CommentForm from './CommentForm';

function getBody(comments, isOpen, articleId) {
    if (!isOpen) {
        return null;
    }
    const commentElements = comments.map((id) => {
        return (
            <li key={id}>
                <Comment commentId={id}/>
            </li>
        )
    });
    return (
        <div>
            <ul>
                {commentElements}
            </ul>
            <CommentForm articleId={articleId}/>
        </div>
    );
};

class CommentList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOpen = () => {
        this.props.loadComments(this.props.articleId);
        this.props.toggleOpen();
    }

    render() {
        const body = getBody(this.props.comments, this.props.isOpen, this.props.articleId);
        return (
            <div>
                <button onClick={this.handleOpen}>
                    {this.props.isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {body}
            </div>
        );
    }
};

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string),
    loadComments: PropTypes.func.isRequired,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    articleId: PropTypes.string.isRequired
};

CommentList.defaultProps = {
    comments: [],
    loaded: false,
    loading: false
};

const mapDispatchToProps = dispatch => {
    return {
        loadComments: (articleId) => dispatch(loadComments(articleId))
    }
};

export default connect(null, mapDispatchToProps)(ToggleOpen(CommentList));