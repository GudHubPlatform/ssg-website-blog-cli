import html from './text-only.html';
import './text-only.scss';

class TextOnly extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        super.render(html);
    }

}

window.customElements.define('text-only', TextOnly);