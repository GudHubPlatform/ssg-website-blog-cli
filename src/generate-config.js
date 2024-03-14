export function generateConfig(auth_key, apps) {
    return /*javascript*/`
export { chapters } from './configs/chapters.mjs';
export { routes } from './configs/routes.mjs';
export { components_list } from './configs/components-list.mjs';
export { blog_config } from './configs/blog-config.mjs';

// PLACE CONSTANTS UNDER THIS LINE AND ADD COMMENT TO EXPLAIN WHAT YOUR CONSTANT DO
export const build_folder = 'dist'; // to server have path to build
export const auth_key = "${auth_key.replace(/\n/g, "\\n")}";    
export const index_sitemap = true; // if false, server will not generate index sitemap

// ClientConfig
export * as clientConfig from './client-config.mjs';
`
}

export function generateChapters(apps) {
    return /*javascript*/`
export const chapters = {
    pages: {
        app_id: ${apps.pages.app_id},
        slug_field_id: ${apps.pages.field_list.find(field => field.name_space === 'slug').field_id},
        json_field_id: ${apps.pages.field_list.find(field => field.name_space === 'json').field_id},
        heading_field_id: ${apps.pages.field_list.find(field => field.name_space === 'h1').field_id},
        description_field_id: ${apps.pages.field_list.find(field => field.name_space === 'description').field_id},
        image_field_id: ${apps.pages.field_list.find(field => field.name_space === 'meta_image_src').field_id},
        sitemap: {
            status_field_id: ${apps.pages.field_list.find(field => field.name_space === 'status').field_id},
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
            filter: function(items) {
                const status_field_id = this.status_field_id;
                return items.filter(item => {
                    const field = item.fields.find(field => field.field_id == status_field_id);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
    },
    blog: {
        app_id: ${apps.blog.app_id},
        slug_field_id: ${apps.blog.field_list.find(field => field.name_space === 'slug').field_id},
        title_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'title').field_id},
        heading_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'h1').field_id},
        description_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'description').field_id},
        intro_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'intro').field_id},
        content_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'article_content').field_id},
        
        type_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'type').field_id},
        status_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'status').field_id},
        categories_list_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'categories').field_id},

        article_post_date_field_id:  ${apps.blog.field_list.find(field => field.name_space === 'posted_at').field_id},
        article_authorRef:  ${apps.blog.field_list.find(field => field.name_space === 'author').field_id},

        comments_app_id:  ${apps.comments.app_id},
        comments_status_field_id:  ${apps.comments.field_list.find(field => field.name_space === 'status').field_id},
        comments_replyToRef_field_id:  ${apps.comments.field_list.find(field => field.name_space === 'reply_to').field_id},
        comments_articleRef_field_id:  ${apps.comments.field_list.find(field => field.name_space === 'article').field_id},
        comments_date_field_id:  ${apps.comments.field_list.find(field => field.name_space === 'date').field_id},

        api_app_id: ${apps.api.app_id},

        sitemap: {
            status_field_id: ${apps.blog.field_list.find(field => field.name_space === 'status').field_id},
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
                const status_field_id = this.status_field_id;
                return items.filter(item => {
                    const field = item.fields.find(field => field.field_id == status_field_id);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
    }
}`;
}