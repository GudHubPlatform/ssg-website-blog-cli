
// it`s template, it will be replaced by generated values
export const chapters = {
    pages: {
        app_id: 33958,
        slug_field_id: 807588,
        json_field_id: 807589,
        heading_field_id: 807587,
        description_field_id: 807598,
        blog_main_page_item_id: 3919658, // item_id of blog main page (in application Pages, so this page relate to chapter - pages)
        image_field_id: 807599,
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
                    case: '/about-us/',
                    priority: 0.5,
                    frequency: 'monthly'
                },
                {
                    case: '/contact-us/',
                    priority: 0.5,
                    frequency: 'monthly'
                }
            ],
            filter: (items) => { //Check status
                return items.filter(item => {
                    const field = item.fields.find(field => field.field_id == 807594);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
    },
    blog: {
        app_id: 33959,
        slug_field_id: 807605,
        title_field_id: 807607,
        heading_field_id: 807603,
        description_field_id: 807625,
        intro_field_id: 807608,
        content_field_id: 807630,
        
        type_field_id: 807604,
        status_field_id: 807613,
        categories_list_field_id: 807622,

        article_post_date_field_id: 807620,
        article_authorRef: 807612,

        comments_app_id: 33960,
        comments_status_field_id: 807640,
        comments_replyToRef_field_id: 807644,
        comments_articleRef_field_id: 807642,
        comments_date_field_id: 807635,

        api_app_id: 33961,

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
                    const field = item.fields.find(field => field.field_id == 807613);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
    },
}