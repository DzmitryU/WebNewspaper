import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render comment: ', this.props.comment.id);
        return (
            <div>
                <div>{this.props.comment.text}</div>
                <h4>{this.props.comment.user}</h4>
            </div>
        );
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
    return {
        comment: state.comments.find(comment => comment.id === ownProps.commentId)
    }
};

export default connect(mapStateToProps)(Comment);
