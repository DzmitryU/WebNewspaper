import {createSelector} from 'reselect';
import moment from "moment/moment";
import {mapToArray} from '../services/CollectionUtils';

function validSelected(articles, article) {
    return (
        articles.length == 0 ||
        articles.includes(article.id)
    );
}

function validDateRange(range, article) {
    return (
        !range.from ||
        !range.to ||
        (
            moment(range.from).isBefore(article.date) &&
            moment(range.to).isAfter(article.date)
        )
    )
}

const filterGetter = state => state.filter;

const articlesGetter = state => state.articles;
const articleIdGetter = (state, props) => props.articleId;

export const filtratedArticlesSelector = createSelector(articlesGetter, filterGetter, (articles, filter) => {
    const {selectedArticles, dateRange} = filter;
    return mapToArray(articles).filter(
        (article) => {
            return (
                validSelected(selectedArticles, article) &&
                validDateRange(dateRange, article)
            );
        }
    );
});

export const articleSelectorFactory = () => createSelector(articlesGetter, articleIdGetter, (articles, articleId) => {
    return articles[articleId];
});

export const articleOptionsSelector = createSelector(articlesGetter, (articles) => {
    const articleOptions = mapToArray(articles).map((article) => ({
        value: article.id, label: article.title
    }));
    return articleOptions;
});