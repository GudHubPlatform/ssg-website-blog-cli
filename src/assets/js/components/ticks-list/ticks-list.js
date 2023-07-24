import html from './ticks-list.html';
import './ticks-list.scss';

class TicksList extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        const json = await super.getGhData(this.ghId);

        this.list = json.list;

        super.render(html);
    }

}

window.customElements.define('ticks-list', TicksList);