export function generateConfig(auth_key, apps) {
    console.log('apps',apps)
    console.log('apps.pages',apps.pages)
    return /*javascript*/`
export const build_folder = 'dist';

export const auth_key = "${auth_key}";

export const chapters = {
    pages: {
        app_id: ${apps.pages.app_id},
        slug_field_id: ${apps.pages.field_list.find(field => field.name_space === 'slug').field_id},
        json_field_id: ${apps.pages.field_list.find(field => field.name_space === 'json').field_id},
        heading_field_id: ${apps.pages.field_list.find(field => field.name_space === 'h1').field_id},
        description_field_id: ${apps.pages.field_list.find(field => field.name_space === 'description').field_id},
        image_field_id: ${apps.pages.field_list.find(field => field.name_space === 'meta_image_src').field_id}
    },
    blog: {
        app_id: ${apps.blog.app_id},
        slug_field_id: ${apps.blog.field_list.find(field => field.name_space === 'slug').field_id},
        title_field_id: ${apps.blog.field_list.find(field => field.name_space === 'title').field_id},
        heading_field_id: ${apps.blog.field_list.find(field => field.name_space === 'h1').field_id},
        description_field_id: ${apps.blog.field_list.find(field => field.name_space === 'description').field_id},
        intro_field_id: ${apps.blog.field_list.find(field => field.name_space === 'intro').field_id},
        content_field_id: ${apps.blog.field_list.find(field => field.name_space === 'article_content').field_id}
    }
}
`
}