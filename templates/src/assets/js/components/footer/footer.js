import html from './footer.html';
import './footer.scss';

class FooterComponent extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        
        this.info = window.getConfig().generalInfo;

        this.hrefPhone = this.info.phone.replace(/[ ()+-]/g, '');

        super.render(html);

    }

}

if(!customElements.get('footer-component')) {
    customElements.define('footer-component', FooterComponent);
}