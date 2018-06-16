import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openedArticleId: null
        }
    };

    render() {
        const articleElements = this.props.articles.map((article) => {
            return (
                <li key={article.id}>
                    <Article
                        article={article}
                        isOpen={article.id === this.state.openedArticleId}
                        toggleOpen={() => this.toggleOpen(article.id)}
                    />
                </li>
            )
        });

        return (
            <ul>
                {articleElements}
            </ul>
        );
    };

    toggleOpen = (id) => {
        if (id === this.state.openedArticleId) {
            id = null;
        }
        this.setState({
            openedArticleId: id
        });
    }
};

export default ArticleList;