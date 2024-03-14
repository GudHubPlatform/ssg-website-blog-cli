export const routes = [
    {
        route: '/blog/',
        index: '/blog/blog.html'
    },
    {
        route: '/blog/page/:page/',
        index: '/blog/blog.html'
    },
    {
        route: '/blog/authors/:author/page/:page/',
        index: '/blog/author.html'
    },
    {
        route: '/blog/authors/:author/',
        index: '/blog/author.html'
    },
    {
        route: '/blog/authors/',
        index: '/blog/authors.html'
    },
    {
        route: '/blog/:category/page/:page/',
        index: '/blog/category.html'
    },
    {
        route: '/blog/:category/:article/',
        index: '/blog/article.html'
    },
    {
        route: '/blog/:category/',
        index: '/blog/category.html'
    }
]