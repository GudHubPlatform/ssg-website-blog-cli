import html from './service-banner.html';
import './service-banner.scss';

class ServiceBanner extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        const json = await super.getGhData(this.ghId);

        let breadcrumbsTitle = document.createElement('div')
        breadcrumbsTitle.innerHTML = json.title;
        
        this.breadcrumbs = JSON.stringify([{"title": breadcrumbsTitle.innerText}]);

        let url = new URL(window.location.href);
        url = url.searchParams.get('path');
        this.buttonLink = url;
        
        
        this.image = json.image;
        let lightLeters = this.hasAttribute('data-light-letters');
        if (lightLeters) {
            this.style.setProperty('--breadcrumbsColor', '#DBE2E7');
            this.style.setProperty('--breadcrumbsLastColor', '#fff');
        } else {
            this.style.setProperty('--breadcrumbsColor', '#4D555B');
            this.style.setProperty('--breadcrumbsLastColor', '#000');
        }

        
        
        super.render(html);
    }

}

window.customElements.define('service-banner', ServiceBanner);