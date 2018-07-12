import { createSelector } from 'reselect';
import moment from "moment/moment";

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

export const filtratedArticlesSelector = createSelector(articlesGetter, filterGetter, (articles, filter) => {
    const {selectedArticles, dateRange} = filter;
    return articles.filter(
        (article) => {
            return (
                validSelected(selectedArticles, article) &&
                validDateRange(dateRange, article)
            );
        }
    );
});