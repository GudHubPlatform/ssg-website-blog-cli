import html from './grid-stats.html';
import './grid-stats.scss';

class GridStats extends GHComponent {
    constructor() {
        super();
    }
    
    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        this.beSlider = this.hasAttribute('be-slider');
        
        const json = await super.getGhData(this.ghId);

        this.items = json.items;
        
        super.render(html);
    }
}

window.customElements.define('grid-stats', GridStats);