import html from './services-tech.html';
import './services-tech.scss';

class ServicesTech extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        const json = await super.getGhData(this.ghId);

        this.techList = json.tech_list;

        super.render(html);
    }
}

window.customElements.define('services-tech', ServicesTech);