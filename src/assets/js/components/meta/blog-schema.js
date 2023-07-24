class BlogSchema extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        if (!window.location.href.includes('/page/')) {
            const chapter = this.hasAttribute('data-chapter') ? this.getAttribute('data-chapter') : 'pages';

            let ids = await super.findIds(chapter);
            const app = await gudhub.getApp(ids.appId);
            const items = app.items_list;
            let item = items.find(findedItem => findedItem.item_id == ids.itemId);
            const blogName = item.fields.find(field => field.field_id == window.constants.chapters[chapter].heading_field_id).field_value;
            const blogDescription = item.fields.find(field => field.field_id == window.constants.chapters[chapter].description_field_id).field_value;
            let articles = await gudhub.jsonConstructor({"type":"array","id":1,"childs":[{"type":"property","id":4,"property_name":"title","property_type":"field_value","field_id":"717953","interpretation":1},{"type":"property","id":3,"property_name":"slug","property_type":"field_value","field_id":"717956","interpretation":1},{"type":"property","id":5,"property_name":"description","property_type":"field_value","field_id":"717954","interpretation":0},{"type":"property","id":10,"property_name":"thumbnail_url","property_type":"field_value","field_id":"717964","interpretation":1},{"type":"property","id":6,"property_name":"posted_at","property_type":"field_value","field_id":"717958","interpretation":0},{"type":"property","id":7,"property_name":"updated_at","property_type":"field_value","field_id":"717985","interpretation":0},{"type":"property","id":9,"property_name":"author_id","property_type":"field_value","field_id":"717968"},{"type":"property","id":8,"property_name":"author","property_type":"field_value","field_id":"717968","interpretation":1}],"property_name":"articles","app_id":"31595","filter":[{"field_id":717957,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:2595","selected_search_option_variable":"Value"},{"field_id":717952,"data_type":"radio_button","valuesArray":["0"],"search_type":"equal_or","$$hashKey":"object:2633","selected_search_option_variable":"Value"}],"isSortable":1,"field_id_to_sort":"717958","sortType":"desc"});
            articles = articles.articles.slice(0, 10);
            const blogImage = articles[0].thumbnail_url;
            let authors = await gudhub.jsonConstructor({"type":"array","id":1,"childs":[{"type":"property","id":3,"property_name":"name","property_type":"field_value","field_id":"744779","interpretation":1},{"type":"property","id":4,"property_name":"slug","property_type":"field_value","field_id":"717956","interpretation":1},{"type":"property","id":5,"property_name":"id","property_type":"variable","variable_type":"current_item"}],"property_name":"authors","app_id":"31595","filter":[{"field_id":717957,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:4128","selected_search_option_variable":"Value"},{"field_id":717952,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:4166","selected_search_option_variable":"Value"}],"isSortable":0});
            authors = authors.authors;

            let posts = [];
            for (let article in articles) {
                let author = authors.find(author => author.id == articles[article].author_id);
                let authorObject = {
                    "@type": "Person",
                    "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${author.slug}`,
                    "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}{author.slug}`,
                    "name": author.name
                }
                let post = {
                    "@type": "BlogPosting",
                    "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${articles[article].slug}`,
                    "mainEntityOfPage": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${articles[article].slug}`,
                    "headline": articles[article].title,
                    "name": articles[article].title,
                    "description": articles[article].description,
                    "datePublished": new Date(Number(articles[article].posted_at)).toISOString(),
                    "dateModified": articles[article].updated_at ? new Date(Number(articles[article].updated_at)).toISOString() : new Date(Number(articles[article].posted_at)).toISOString(),
                    "author": authorObject,
                    "image": {
                        "@type": "ImageObject",
                        "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}{articles[article].thumbnail_url}`,
                        "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}{articles[article].thumbnail_url}`,
                        "height": "410",
                        "width": "950"
                    },
                    "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}{articles[article].slug}`
                };
                posts.push(post);
            }
            
            const schema = {
                "@context": "https://schema.org/",
                "@type": "Blog",
                "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}/blog/`,
                "mainEntityOfPage": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}/blog/`,
                "name": blogName,
                "description": blogDescription,
                "publisher": {
                    "@type": "Organization",
                    "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}`,
                    "name": window.constants.info.name,
                    "logo": {
                        "@type": "ImageObject",
                        "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}` + blogImage,
                        "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}` + blogImage,
                        "width": "1920",
                        "height": "700"
                    }
                },
                "blogPost": posts
            };
            if (!document.head.querySelector('#blogSchema')) {
                document.head.innerHTML += `
                    <script id="blogSchema" type="application/ld+json">${JSON.stringify(schema)}</script>
                `;

            }
        }
        this.remove();
    }
}

window.customElements.define('blog-schema', BlogSchema);