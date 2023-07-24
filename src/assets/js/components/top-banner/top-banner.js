import html from './top-banner.html';
import './top-banner.scss';
class TopBanner extends GHComponent {
    
    constructor() {
        super();
    }
    async onServerRender() {
        let url = new URL(window.location.href);
        url = url.searchParams.get('path');
        this.slug = url;
        if (url.includes('/page/')) {
            this.page = true;
            this.breadcrumbs = JSON.stringify([{"title": "Blog"}])
        } else {
            this.page = false;
            this.ghId = this.getAttribute('data-gh-id') || null;
            this.json = await super.getGhData(this.ghId);
            
            this.button = this.json.button || null;
            if (!this.json.button) {
                this.classList.add('without_button');
            }
            
            let breadcrumbsTitle = document.createElement('div')
            breadcrumbsTitle.innerHTML = this.json.title;
            
            this.breadcrumbs = JSON.stringify([{"title": breadcrumbsTitle.innerText}]);
            
            this.image = this.json.image || false;
        }
        this.backgroundImage = this.hasAttribute('data-background-image') ? this.getAttribute('data-background-image') : false;
        if (this.backgroundImage) {
            this.style.backgroundImage = `url(${this.json.background_image})`;
            this.style.setProperty('--breadcrumbsColor', '#DBE2E7');
            this.style.setProperty('--breadcrumbsLastColor', '#fff');
        } else {
            this.style.setProperty('--breadcrumbsColor', '#4D555B');
            this.style.setProperty('--breadcrumbsLastColor', '#000');
        }

        super.render(html);
    }
}
window.customElements.define('top-banner', TopBanner);