import html from './tech-block.html';
import './tech-block.scss';
class TechBlock extends GHComponent {
    
    constructor() {
        super();
    }
    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        const json = await super.getGhData(this.ghId);
        
        this.technologies = json.tech_list
        
        super.render(html);
    }
}
window.customElements.define('tech-block', TechBlock);