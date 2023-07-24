import html from './grid-list.html';
import './grid-list.scss';

class GridList extends GHComponent {
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

window.customElements.define('grid-list', GridList);