import html from './get-in-touch-block.html';
import './get-in-touch-block.scss';

class GetInTouchBlock extends GHComponent {

    constructor() {
        super();
    }

    async onServerRender() {
        super.render(html);
    }
}
window.customElements.define('get-in-touch-block', GetInTouchBlock);