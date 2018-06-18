import React from 'react';
import PropTypes from 'prop-types';
import CommentList from "./CommentList";

class Article extends React.Component {

    constructor(props) {
        super(props);
    }

    getBody = () => {
        return this.props.isOpen ? (
            <div>
                <div>{this.props.article.text}</div>
                <h3>{this.props.article.date}</h3>
                <CommentList comments={this.props.article.commentItems}/>
            </div>)
            : null;
    };

    render() {
        const body = this.getBody();
        return (
            <div>
                <h1>
                    {this.props.article.title}
                    <button onClick={this.props.toggleOpen}>
                        {this.props.isOpen ? 'Close' : 'Open'}
                    </button>
                </h1>
                {body}
            </div>
        );
    };
};

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string,
        commentItems: PropTypes.array
    }).isRequired
};

export default Article;