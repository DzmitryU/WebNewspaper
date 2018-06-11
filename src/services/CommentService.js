const CommentService = {
    fillArticles: (articles, comments) => {
        return articles.map(article => {
            if (article.comments) {
                article.commentItems = comments.filter(comment => {
                    return article.comments.includes(comment.id);
                });
            }
            return article;
        })
    }
};

export default CommentService;