
export const build_folder = 'dist';

export const auth_key = "azqAuezTSP+S6Rx+ysa1lCrfTsxgAquL2CAWcBoGzeQF2lrOoGSM71y59yo6mzEP/jQK1Jcwz78t\nCKsDZIa6SA==";

export const index_sitemap = true;

export const redirects = [
    {
        from: '/homepage',
        to: '/'
    }
]

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

export const chapters = {
    pages: {
        app_id: 33452,
        slug_field_id: 796197,
        json_field_id: 796198,
        heading_field_id: 796196,
        description_field_id: 796207,
        image_field_id: 796208
    },
    blog: {
        app_id: 33453,
        slug_field_id: 796214,
        title_field_id: 796216,
        heading_field_id: 796212,
        description_field_id: 796234,
        intro_field_id: 796217,
        content_field_id: 796239
    }
}

export const components_list = [
    {
        tag: 'meta-index',
        src: '/src/assets/js/components/meta/meta-index.js',
        serverOnly: true
    },
    {
        tag: 'canonical-component',
        src: '/src/assets/js/components/meta/canonical.js',
        serverOnly: true
    },
    {
        tag: 'meta-tag',
        src: '/src/assets/js/components/meta/meta-tag.js',
        serverOnly: true
    },
    {
        tag: 'organization-schema',
        src: '/src/assets/js/components/meta/organization-schema.js',
        serverOnly: true
    },
    {
        tag: 'service-schema',
        src: '/src/assets/js/components/meta/service-schema.js',
        serverOnly: true
    },
    {
        tag: 'blog-schema',
        src: '/src/assets/js/components/meta/blog-schema.js',
        serverOnly: true
    },
    {
        tag: 'author-schema',
        src: '/src/assets/js/components/meta/author-schema.js',
        serverOnly: true
    },
    {
        tag: 'title-tag',
        src: '/src/assets/js/components/meta/title-tag.js',
        serverOnly: true
    },
    {
        tag: 'top-banner',
        src: '/src/assets/js/components/top-banner/top-banner.js',
    },
    {
        tag: 'header-component',
        src: '/src/assets/js/components/header/header.js'
    },
    {
        tag: 'footer-component',
        src: '/src/assets/js/components/footer/footer.js',
        serverOnly: true
    },
    {
        tag: 'counter-component',
        src: '/src/assets/js/components/counter/counter-component.js'
    },
    {
        tag: 'get-in-touch-block',
        src: '/src/assets/js/components/get-in-touch-block/get-in-touch-block.js',
        serverOnly: true
    },
    {
        tag: 'form-component',
        src: '/src/assets/js/components/form/form.js'
    },
    {
        tag: 'recent-posts',
        src: '/src/assets/js/components/recent-posts/recent-posts.js'
    },
    {
        tag: 'grid-component',
        src: '/src/assets/js/components/grid/grid.js'
    },
    {
        tag: 'edit-mode',
        src: '/src/assets/js/components/edit-mode/edit-mode.js'
    },
    {
        tag: 'image-component',
        src: '/src/assets/js/components/image-component/image-component.js'
    },
    {
        tag: 'fullscreen-image-and-text',
        src: '/src/assets/js/components/fullscreen-image-and-text/fullscreen-image-and-text.js'
    },
    {
        tag: 'contact-us-block',
        src: '/src/assets/js/components/contact-us-block/contact-us-block.js'
    },
    {
        tag: 'service-banner',
        src: '/src/assets/js/components/service-banner/service-banner.js'
    },
    {
        tag: 'tabs-component',
        src: '/src/assets/js/components/tabs/tabs-component.js'
    },
    {
        tag: 'faq-component',
        src: '/src/assets/js/components/faq/faq.js'
    },
    {
        tag: 'posts-template',
        src: '/src/assets/js/components/blog/posts-template/posts-template.js'
    },
    {
        tag: 'article-component',
        src: '/src/assets/js/components/blog/article/article-component.js'
    },
    {
        tag: 'authors-list',
        src: '/src/assets/js/components/blog/authors-list/authors-list.js'
    },
    {
        tag: 'author-page',
        src: '/src/assets/js/components/blog/author-page/author-page.js'
    },
    {
        tag: 'breadcrumbs-component',
        src: '/src/assets/js/components/breadcrumbs/breadcrumbs-component.js',
        serverOnly: true
    },
    {
        tag: 'text-only',
        src: '/src/assets/js/components/text-only/text-only.js'
    },
    {
        tag: 'categories-list',
        src: '/src/assets/js/components/blog/categories-list/categories-list.js'
    },
    {
        tag: 'category-banner',
        src: '/src/assets/js/components/category-banner/category-banner.js',
        serverOnly: true
    },
    {
        tag: 'subscribe-mail',
        src: '/src/assets/js/components/subscribe-mail/subscribe-mail.js'
    },
    {
        tag: 'contents-component',
        src: '/src/assets/js/components/blog/contents/contents.js'
    },
    {
        tag: 'reviews-slider',
        src: '/src/assets/js/components/reviews-slider/reviews-slider.js'
    },
    {
        tag: 'comments-component',
        src: '/src/assets/js/components/blog/comments/comments.js'
    },
    {
        tag: 'popup-success',
        src: '/src/assets/js/components/popup/popup-success/popup-success.js'
    },
    {
        tag: 'popup-form',
        src: '/src/assets/js/components/popup/popup-form/popup-form.js'
    },
    {
        tag: 'cookies-popup',
        src: '/src/assets/js/components/cookies-popup/cookies-popup.js'
    }
]