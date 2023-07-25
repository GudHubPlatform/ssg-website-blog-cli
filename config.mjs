
export const build_folder = 'dist';

export const auth_key = "44UPpq/r2htUVcZDYgN0/F8DIgwZbA8F1DsgPQnpnbkF2lrOoGSM71y59yo6mzEP1HD3soYmBNwOxTpcSzxhrQ==";

export const index_sitemap = true;

export const redirects = [
    {
        from: '/web-application-development-experience-matches-your-need/',
        to: '/services/web-application-development/'
    },
    {
        from: '/customapplicationsoftwaredevelopment.htm',
        to: '/'
    },
    {
        from: '/webapplicationdevelopment.htm',
        to: '/services/web-application-development/'
    },
    {
        from: '/services.htm',
        to: '/'
    },
    {
        from: '/services/',
        to: '/'
    },
    {
        from: '/sqlservervsmsaccessdatabaseselection.htm',
        to: '/services/database-development/'
    },
    {
        from: '/services_programming.htm',
        to: '/services/custom-software-development/'
    },
    {
        from: '/company/',
        to: '/'
    },
    {
        from: '/services/software-development-and-support/',
        to: '/services/custom-software-development/'
    },
    {
        from: '/services/database-development/database-design/',
        to: '/services/database-development-new-jersey/'
    },
    {
        from: '/index.htm',
        to: '/'
    },
    {
        from: '/databasedevelopment.htm',
        to: '/services/database-development/'
    },
    {
        from: '/database-development/',
        to: '/services/database-development/'
    },
    {
        from: '/company/mission-statement/',
        to: '/mission-statement/'
    },
    {
        from: '/web-application-development/',
        to: '/services/web-application-development/'
    },
    {
        from: '/custom-application-software-development-new-jersey/',
        to: '/services/custom-software-development-new-jersey/'
    },
    {
        from: '/home/business-technology-consultants-and-system-integrators/',
        to: '/services/business-technology-consulting/'
    },
    {
        from: '/consolvit-com-selects-strand-management-solutions-inc-for-saas-development/',
        to: '/services/saas-development/'
    },
    {
        from: '/industries/',
        to: '/'
    },
    {
        from: '/support/',
        to: '/'
    },
    {
        from: '/contact/',
        to: '/contact-us/'
    },
    {
        from: '/newsda/',
        to: '/blog/'
    },
    {
        from: '/services/',
        to: '/'
    },
    {
        from: '/home/',
        to: '/'
    },
    {
        from: '/company/opportunities/',
        to: '/opportunities/'
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
        app_id: 33360,
        slug_field_id: 794760,
        json_field_id: 794764,
        heading_field_id: 794762,
        description_field_id: 794759,
        image_field_id: 794763,
        sitemap: {
            frequency: 'weekly',
            priority: 0.8,
            sitemapName: 'pages',
            cases: [
                {
                    case: '/',
                    priority: 1,
                    frequency: 'weekly'
                },
                {
                    case: '/blog/',
                    priority: 0.9,
                    frequency: 'daily'
                },
                {
                    case: '/contact-us/',
                    priority: 0.5,
                    frequency: 'monthly'
                }
            ],
            filter: (items) => {
                return items.filter(item => {
                    const field = item.fields.find(field => field.field_id == 794761);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
    },
    blog: {
        app_id: 33361,
        slug_field_id: 794804,
        title_field_id: 794784,
        heading_field_id: 794783,
        description_field_id: 794785,
        sitemap: {
            frequency: 'weekly',
            priority: 0.6,
            cases: [
                {
                    case: /^\/blog\/authors\/[^\/]*\/$/,
                    sitemapName: 'authors',
                    frequency: 'weekly',
                    priority: 0.6
                },
                {
                    case: /^\/blog\/[^\/]*\/[^\/]*$/,
                    sitemapName: 'categories',
                    frequency: 'weekly',
                    priority: 0.6
                },
                {
                    case: /^\/blog\/((?!authors).)[^\/]*\/[^\/]*\/$/,
                    sitemapName: 'articles',
                    frequency: 'weekly',
                    priority: 0.7
                }
            ],
            filter: (items) => {
                return items.filter(item => {
                    const field = item.fields.find(field => field.field_id == 717957);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
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
        tag: 'local-business-schema',
        src: '/src/assets/js/components/meta/local-business-schema.js',
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