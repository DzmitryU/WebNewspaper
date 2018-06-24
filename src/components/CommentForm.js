import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            text: ''
        };
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

    render() {
        return (
            <div>
                <section>
                    User: <input type='text' value={this.state.user} onChange={this.handleChangeUser}/>
                </section>
                <section>
                    Text: <p><input type='text' value={this.state.text} onChange={this.handleChangeText}/></p>
                </section>
                <button>Submit</button>
            </div>
        );
    }
}

export default CommentForm;