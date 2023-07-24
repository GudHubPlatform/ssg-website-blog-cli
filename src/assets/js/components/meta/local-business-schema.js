class LocalBusinessSchema extends GHComponent {
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
        const serviceSlug = item.fields.find(field => field.field_id == window.constants.chapters[chapter].slug_field_id).field_value;
        const serviceImage = item.fields.find(field => field.field_id == window.constants.chapters[chapter].image_field_id).field_value;
        const serviceLocation = this.hasAttribute('data-location') ? this.getAttribute('data-location') : 'nj'
        const schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": serviceName,
            "image": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${serviceImage}`,
            "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${serviceSlug}`,
            "telephone": "+609-731-6629",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": serviceLocation === 'nj' ? "3525 Quakerbridge Road Suite 6325 Hamilton" : "100 E 173rd St Bronx",
                "addressLocality": serviceLocation === 'nj' ? "New Jersey" : "New York",
                "postalCode": serviceLocation === 'nj' ? "08619" : "10457",
                "addressCountry": "USA"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            },
            "sameAs": [
                "https://www.facebook.com/strandmanagementsolutions/",
                "https://www.linkedin.com/company/strand-management-solutions-inc./"
            ] 
        };

        if (!document.head.querySelector('#localBusinessSchema')) {

            document.head.innerHTML += `
                <script id="localBusinessSchema" type="application/ld+json">${JSON.stringify(schema)}</script>
            `;

        }
        this.remove();
    }
}

window.customElements.define('local-business-schema', LocalBusinessSchema);