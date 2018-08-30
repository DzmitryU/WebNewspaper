import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ToggleOpen from '../decorators/toggleOpen';
import {loadArticleComments} from '../ac/comment';

import Comment from './Comment';
import CommentForm from './CommentForm';
import Loader from './Loader';

function getBody(comments, isOpen, articleId, loading, loaded) {
    if (!isOpen || !(loading || loaded)) {
        return null;
    }
    if (loading) {
        return <Loader/>
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
    };

    componentDidUpdate(prevProps) {
        if (!prevProps.isOpen && this.props.isOpen && !(this.props.loading || this.props.loaded)) {
            this.props.loadArticleComments(this.props.articleId);
        }
    }

    render() {
        const body = getBody(this.props.comments, this.props.isOpen, this.props.articleId, this.props.loading, this.props.loaded);
        return (
            <div>
                <button onClick={this.props.toggleOpen}>
                    {this.props.isOpen ? 'Hide comments' : 'Show comments'}
                </button>
                {body}
            </div>
        );
    }
};

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.string),
    loadArticleComments: PropTypes.func.isRequired,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    isOpen: PropTypes.bool,
    articleId: PropTypes.string.isRequired
};

CommentList.defaultProps = {
    comments: [],
    loaded: false,
    loading: false,
    isOpen: false
};

const mapDispatchToProps = dispatch => {
    return {
        loadArticleComments: (articleId) => dispatch(loadArticleComments(articleId))
    }
};

export default connect(null, mapDispatchToProps)(ToggleOpen(CommentList));