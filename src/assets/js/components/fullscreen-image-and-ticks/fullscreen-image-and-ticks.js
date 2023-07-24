import html from './fullscreen-image-and-ticks.html';
import './fullscreen-image-and-ticks.scss';

class FullscreenImageAndTicks extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        const json = await super.getGhData(this.ghId);

        this.list = json.list;

        this.image = json.image;

        super.render(html);
    }

}

window.customElements.define('fullscreen-image-and-ticks', FullscreenImageAndTicks);