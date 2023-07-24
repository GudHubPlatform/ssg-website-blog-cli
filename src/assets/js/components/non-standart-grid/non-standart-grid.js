import html from './non-standart-grid.html';
import './non-standart-grid.scss';

class NonStandartGrid extends GHComponent {
    constructor() {
        super();
    }
    
    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        this.json = await super.getGhData(this.ghId);
        
        this.items = this.json.items;

        super.render(html);
    }
}

window.customElements.define('non-standart-grid', NonStandartGrid);