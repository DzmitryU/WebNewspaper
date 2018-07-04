import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select'

import 'react-select/dist/react-select.css'
import './style.css';

class ArticleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (value) => {
        this.setState({value});
    };

    articlesToOptions = (articles) => {
        return articles.map((article) => ({
            value: article.id, label: article.title
        }));
    };


    render() {

        const {value} = this.state;

        return (
            <Select
                value={value}
                onChange={this.handleChange}
                multi={true}
                options={this.articlesToOptions(this.props.articles)}
            />
        );
    }
};

ArticleSelect.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default ArticleSelect;