import React from 'react';
import Article from './Article';

class ArticleList extends React.Component {
    render() {
        const articleElements = this.props.articles.map((article) => {
            return (
                <li key={article.id}>
                    <Article article={article}/>
                </li>
            )
        });

        return (
            <ul>
                {articleElements}
            </ul>
        );
    };
};

export default ArticleList;