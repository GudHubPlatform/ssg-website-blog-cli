import html from './text-with-shadow.html';
import './text-with-shadow.scss';

class TextWithShadow extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        const json = await super.getGhData(this.ghId);

        this.paragraphs = json.paragraphs;

        super.render(html);
    }

}

window.customElements.define('text-with-shadow', TextWithShadow);