import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {deleteArticle} from '../../ac/article'

import ArticleBody from './ArticleBody'

function getBody (article, isOpen) {
    return isOpen ? (<ArticleBody articleId={article.id} />) : null;
};

class Article extends React.Component {
    constructor (props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.delete(this.props.article.id);
    }

    render() {
        const body = getBody(this.props.article, this.props.isOpen);

        return (
            <div>
                <h1>
                    {this.props.article.title}
                    <button onClick={this.props.toggleOpen}>
                        {this.props.isOpen ? 'Close' : 'Open'}
                    </button>
                    <button onClick={this.handleDelete}>Delete</button>
                </h1>
                {body}
            </div>
        );
    }
};

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        date: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        delete: (id) => dispatch(deleteArticle(id))
    }
};
export default connect(null, mapDispatchToProps)(Article);