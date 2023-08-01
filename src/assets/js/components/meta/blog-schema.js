class BlogSchema extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        if (!window.location.href.includes('/page/')) {
            const chapter = this.hasAttribute('data-chapter') ? this.getAttribute('data-chapter') : 'pages';

            // Find appId and itemId, then find in item fields which we need
            let ids = await super.findIds(chapter);
            const app = await gudhub.getApp(ids.appId);
            const items = app.items_list;
            let item = items.find(findedItem => findedItem.item_id == ids.itemId);
            const blogName = item.fields.find(field => field.field_id == window.constants.chapters[chapter].heading_field_id).field_value;
            const blogDescription = item.fields.find(field => field.field_id == window.constants.chapters[chapter].description_field_id).field_value;
            // Get all articles and slice 10 articles to show in blog-schema
            let articles = await gudhub.jsonConstructor({"type":"array","id":1,"childs":[{"type":"property","id":3,"property_name":"title","property_type":"field_value","field_id":"794784","interpretation":1},{"type":"property","id":4,"property_name":"slug","property_type":"field_value","field_id":"794804","interpretation":1},{"type":"property","id":5,"property_name":"description","property_type":"field_value","field_id":"794785","interpretation":1},{"type":"property","id":7,"property_name":"posted_at","property_type":"field_value","field_id":"794791","interpretation":0},{"type":"property","id":10,"property_name":"author","property_type":"field_value","field_id":"794789","interpretation":1},{"type":"property","id":8,"property_name":"updated_at","property_type":"field_value","field_id":"794790"},{"type":"property","id":9,"property_name":"author_id","property_type":"field_value","field_id":"794789"},{"type":"property","id":6,"property_name":"thumbnail_src","property_type":"field_value","field_id":"794800","interpretation":1}],"property_name":"articles","app_id":"33361","filter":[{"field_id":794787,"data_type":"radio_button","valuesArray":["0"],"search_type":"equal_or","$$hashKey":"object:16368","selected_search_option_variable":"Value"},{"field_id":794803,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:16410","selected_search_option_variable":"Value"}],"isSortable":1,"field_id_to_sort":"794791","sortType":"desc"});
            articles = articles.articles.slice(0, 10);
            const blogImage = articles[0].thumbnail_url;
            let authors = await gudhub.jsonConstructor({"type":"array","id":1,"childs":[{"type":"property","id":3,"property_name":"name","property_type":"field_value","field_id":"794783","interpretation":1},{"type":"property","id":4,"property_name":"slug","property_type":"field_value","field_id":"794804","interpretation":1},{"type":"property","id":5,"property_name":"id","property_type":"variable","variable_type":"current_item"}],"property_name":"authors","app_id":"33361","filter":[{"field_id":794787,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:17515","selected_search_option_variable":"Value"},{"field_id":794803,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:17557","selected_search_option_variable":"Value"}]});
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