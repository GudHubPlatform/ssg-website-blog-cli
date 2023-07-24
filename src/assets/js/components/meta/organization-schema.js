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
            "foundingDate": "1979",
            "founders": [
                {
                    "@type": "Person",
                    "name": "David R. Krumholz"
                }
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "3525 Quakerbridge Road Suite 6325 Hamilton",
                "addressLocality": "New Jersey",
                "addressRegion": "NJ",
                "postalCode": "08619",
                "addressCountry": "USA"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "telephone": "[+609-731-6629]",
                "email": "dkrumholz@strandmanagement.com"
            },
            "sameAs": [
                "https://www.linkedin.com/company/strand-management-solutions-inc./",
                "https://www.facebook.com/strandmanagementsolutions/"
            ]
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