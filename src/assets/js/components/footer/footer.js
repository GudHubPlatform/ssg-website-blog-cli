import html from './footer.html';
import './footer.scss';

import generalInfo from '/src/general-info.json';
import pagesObject from './pages-object.json';

class FooterComponent extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.menu = [
            { title: 'Contact Us', slug: '/contact-us/' }
        ];
        let allPages = await gudhub.jsonConstructor(pagesObject);
        allPages = allPages.pages;

        this.services = allPages;

        this.info = generalInfo;

        this.hrefPhone = this.info.phone.replace(/[ ()+-]/g, '');
         

        super.render(html);

    }

}

if(!customElements.get('footer-component')) {
    customElements.define('footer-component', FooterComponent);
}