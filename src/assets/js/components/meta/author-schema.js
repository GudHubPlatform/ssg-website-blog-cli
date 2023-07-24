class AuthorSchema extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {

        if (!window.location.href.includes("/page/")) {
            let authors = await gudhub.jsonConstructor({"type":"array","id":1,"childs":[{"type":"property","id":3,"property_name":"title","property_type":"field_value","field_id":"717953","interpretation":1},{"type":"property","id":4,"property_name":"name","property_type":"field_value","field_id":"744779","interpretation":1},{"type":"property","id":5,"property_name":"slug","property_type":"field_value","field_id":"717956","interpretation":1},{"type":"property","id":8,"property_name":"id","property_type":"variable","variable_type":"current_item"},{"type":"property","id":7,"property_name":"description","property_type":"field_value","field_id":"717954","interpretation":1},{"type":"property","id":10,"property_name":"facebook","property_type":"field_value","field_id":"744786","interpretation":1},{"type":"property","id":11,"property_name":"linkedin","property_type":"field_value","field_id":"744787","interpretation":1},{"type":"property","id":9,"property_name":"intro","property_type":"field_value","field_id":"717955","interpretation":1},{"type":"property","id":6,"property_name":"thumbnail_url","property_type":"field_value","field_id":"717964","interpretation":1}],"property_name":"authors","app_id":"31595","filter":[{"field_id":717952,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:2150","selected_search_option_variable":"Value"},{"field_id":717957,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:2192","selected_search_option_variable":"Value"}]});
            authors = authors.authors;

            const url = new URL(window.location.href);
            const slug = url.searchParams.get('path');

            let author = authors.find(author => author.slug === slug);
            
            let socLinks = [author.facebook, author.linkedin];
            
            const getContent = (link) => {
                return new Promise(async (resolve) => {
                    const response = await fetch(link);
                    const content = await response.text();
                    const div = document.createElement('div');
                    div.insertAdjacentHTML('beforeend', content);
                    resolve(div.innerText);
                });
                }
                
                author.description = await getContent(author.description)
                console.log(author.name.split(' ')[1])
            let schema = {
                "@context": "https://schema.org",
                "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}` + author.slug,
                "@type": "Person",
                "name": author.name,
                "givenName": author.name.split(' ')[0],
                "familyName": author.name.split(' ')[1],
                "description": JSON.parse(author.intro).blocks[0].data.text,
                "knowsAbout": author.description,
                "jobTitle": author.description,
                "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}` + author.slug,
                "knowsLanguage": [
                    "English",
                    "Ukrainian"
                ],
                "image": {
                    "@type": "ImageObject",
                    "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}` + author.thumbnail_url,
                    "author": {
                        "@type": "Person",
                        "name": author.name
                    }
                },
                "sameAs": socLinks
            }

            if (!document.head.querySelector('#authorSchema')) {

                document.head.innerHTML += `
                    <script id="authorSchema" type="application/ld+json">${JSON.stringify(schema)}</script>
                `;

            }
            this.remove()
        }
    }

}

window.customElements.define('author-schema', AuthorSchema);