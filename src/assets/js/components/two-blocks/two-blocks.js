import html from './two-blocks.html';
import './two-blocks.scss';

class TwoBlocks extends GHComponent {
    constructor() {
        super();
    }
    
    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        const json = await super.getGhData(this.ghId);

        this.blocks = json.blocks;
        
        super.render(html);
    }
}

window.customElements.define('two-blocks', TwoBlocks);