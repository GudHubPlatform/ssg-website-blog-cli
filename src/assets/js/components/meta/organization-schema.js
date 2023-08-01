import generalInfo from '/src/general-info.json';
class OrganizationSchema extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        const schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": generalInfo.name,
            "legalName": generalInfo.legalName,
            "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}`,
            "logo": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}/assets/images/logo.svg`,
            "foundingDate": generalInfo.foundingDate,
            "founders": [
                {
                    "@type": "Person",
                    "name": generalInfo.founders
                }
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": generalInfo.separatedAddress.streetAddress,
                "addressLocality": generalInfo.separatedAddress.addressLocality,
                "addressRegion": generalInfo.separatedAddress.addressRegion,
                "postalCode": generalInfo.separatedAddress.postalCode,
                "addressCountry": generalInfo.separatedAddress.addressCountry
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "telephone": `[${generalInfo.phone}]`,
                "email": generalInfo.email
            },
            "sameAs": [generalInfo.socLinks.linkedin, generalInfo.socLinks.facebook]
        }

        if (!document.head.querySelector('#organizationSchema')) {

            document.head.innerHTML += `
                <script id="organizationSchema" type="application/ld+json">${JSON.stringify(schema)}</script>
            `;

        }
        this.remove();
    }
}

window.customElements.define('organization-schema', OrganizationSchema);