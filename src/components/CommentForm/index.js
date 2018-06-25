import React from 'react';
import './style.css';

import COMMENT_RULES from '../../rules/comment';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            text: ''
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        console.log(COMMENT_RULES);
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

    validate = (string, rule) => {
        return string.length >= rule.MIN_LENGTH && string.length <= rule.MAX_LENGTH;
    };

    isUserValid = (user) => {
        return this.validate(user, COMMENT_RULES.USER);
    };

    isTextValid = (text) => {
        console.log(text.length);
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
                <button>Submit</button>
            </div>
        );
    }
}

export default CommentForm;