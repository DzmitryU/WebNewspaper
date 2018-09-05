import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

import COMMENT_RULES from '../../rules/comment';
import {addComment} from '../../ac/comment';

const DEFAULT_STATE = {
    user: '',
    text: ''
};

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = DEFAULT_STATE;
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
    }

    handleChangeUser = (ev) => {
        this.setState({
            user: ev.target.value
        });
    };

    handleChangeText = (ev) => {
        this.setState({
            text: ev.target.value
        });
    };

    handleSubmit = () => {
        this.props.addComment(this.state);
        this.setState({
            ...DEFAULT_STATE
        });
    };

    validate = (string, rule) => {
        return string.length >= rule.MIN_LENGTH && string.length <= rule.MAX_LENGTH;
    };

    isUserValid = (user) => {
        return this.validate(user, COMMENT_RULES.USER);
    };

    isTextValid = (text) => {
        return this.validate(text, COMMENT_RULES.TEXT);
    };

    render() {
        const {user, text} = this.state;
        return (
            <div className="CommentForm">
                <section>
                    User:
                    <p>
                        <input
                            className={!this.isUserValid(user) ? 'InvalidInput': ''}
                            type='text'
                            value={user}
                            onChange={this.handleChangeUser}/>
                    </p>
                </section>
                <section>
                    Text:
                    <p className='CommentInputText'>
                        <textarea
                            className={!this.isTextValid(text) ? 'InvalidInput': ''}
                            type='text'
                            value={text}
                            onChange={this.handleChangeText}
                        />
                    </p>
                </section>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addComment: (comment) => {
            dispatch(addComment(comment, ownProps.articleId));
        }
    };
};

export default connect(null, mapDispatchToProps)(CommentForm);