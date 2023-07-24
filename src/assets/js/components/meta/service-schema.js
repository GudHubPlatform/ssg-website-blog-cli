import generalInfo from '/src/general-info.json';
class ServiceSchema extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        const chapter = this.hasAttribute('data-chapter') ? this.getAttribute('data-chapter') : 'pages';

        let ids = await super.findIds(chapter);
        const app = await gudhub.getApp(ids.appId);
        const items = app.items_list;
        let item = items.find(findedItem => findedItem.item_id == ids.itemId);
        const serviceName = item.fields.find(field => field.field_id == window.constants.chapters[chapter].heading_field_id).field_value;
        const serviceDescription = item.fields.find(field => field.field_id == window.constants.chapters[chapter].description_field_id).field_value;
        const serviceSlug = item.fields.find(field => field.field_id == window.constants.chapters[chapter].slug_field_id).field_value;
        const serviceImage = item.fields.find(field => field.field_id == window.constants.chapters[chapter].image_field_id).field_value;
        const schema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription,
            "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${serviceSlug}`,
            "provider": {
                "@type": "Organization",
                "name": generalInfo.name
            },
            "serviceType": "IT Development Services",
            "areaServed": [
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "3525 Quakerbridge Road Suite 6325 Hamilton",
                        "addressLocality": "New Jersey",
                        "addressRegion": "NJ",
                        "postalCode": "08619",
                        "addressCountry": "USA"
                    }
                },
                {
                    "@type": "Place",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "100 E 173rd St Bronx",
                        "addressLocality": "New York",
                        "addressRegion": "NY",
                        "postalCode": "10457",
                        "addressCountry": "USA"
                    }
                }
            ],
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "opens": "09:00",
                "closes": "18:00",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ]
            },
            "image": {
                "@type": "ImageObject",
                "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${serviceImage}`,
                "width": "800",
                "height": "600"
            }
        };

        if (!document.head.querySelector('#serviceSchema')) {

            document.head.innerHTML += `
                <script id="serviceSchema" type="application/ld+json">${JSON.stringify(schema)}</script>
            `;

        }
        this.remove();
    }
}

window.customElements.define('service-schema', ServiceSchema);