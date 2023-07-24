import html from './contact-us-block.html';
import './contact-us-block.scss';

class ContactUsBlock extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        super.render(html);
    }
}
window.customElements.define('contact-us-block', ContactUsBlock);