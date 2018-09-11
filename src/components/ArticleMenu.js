import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink, Route} from 'react-router-dom'

import {loadArticles} from '../ac/article';
import {articleListGetter} from '../selectors/articles'
import Loader from './Loader';
import Article from './Article';

function getArticleElement(article) {
    return (
        <li key={article.id}>
            <NavLink to={`/articles/${article.id}`} activeStyle={{color: 'red'}}>{article.title}</NavLink>
        </li>
    );
}

class ArticleMenu extends React.Component {
    constructor(props) {
        super(props);

        this.getBody = this.getBody.bind(this);
    }

    componentDidMount() {
        if (!(this.props.loaded || this.props.loading)) {
            this.props.loadArticles();
        }
    }

    getBody() {
        let body;
        if (this.props.loading) {
            body = (<Loader/>);
        } else {
            const articleElements =
                this.props.articles.map(
                    (article) => getArticleElement(article)
                );
            body = (
                <div>
                    <ul>
                        {articleElements}
                    </ul>
                    {/*<Route path='/articles/:id' component={Article}/>*/}
                </div>

            );
        }
        return body;
    }

    render() {
        console.log('Update Article Menu');
        console.log(this.props);
        return this.getBody();
    }
};

ArticleMenu.propTypes = {
    articles: PropTypes.array,
    loading: PropTypes.bool,
    loaded: PropTypes.bool
};

ArticleMenu.defaultProps = {
    articles: [],
    loading: false,
    loaded: false
};

const mapStateToProps = state => {
    return {
        articles: articleListGetter(state),
        loading: state.articles.loading,
        loaded: state.articles.loaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadArticles: (articles) =>
            dispatch(loadArticles(articles)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleMenu);