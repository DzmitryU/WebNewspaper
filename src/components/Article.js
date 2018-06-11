import React from 'react';

class Article extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    handleButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        let body = '';
        if (this.state.isOpen) {
            body = (
                <div>
                    <div>{this.props.article.text}</div>
                    <h3>{this.props.article.date}</h3>
                </div>
            );
        }
        return (
            <div>
                <h1>
                    {this.props.article.title}
                    <button onClick={this.handleButtonClick}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                </h1>
                {body}
            </div>
        );
    };
};

export default Article;