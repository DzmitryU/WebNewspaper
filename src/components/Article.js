import React from 'react';

class Article extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.article.title}</h1>
                <div>{this.props.article.text}</div>
                <h3>{this.props.article.date}</h3>
            </div>
        );
    };
};

export default Article;