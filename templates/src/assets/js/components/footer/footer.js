import html from './footer.html';
import './footer.scss';

import generalInfo from '../../../../general-info.json';

class FooterComponent extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        
        this.info = generalInfo;

        this.hrefPhone = this.info.phone.replace(/[ ()+-]/g, '');

        super.render(html);

    }

}

if(!customElements.get('footer-component')) {
    customElements.define('footer-component', FooterComponent);
}