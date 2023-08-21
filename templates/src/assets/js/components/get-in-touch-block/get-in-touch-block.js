import html from './get-in-touch-block.html';
import './get-in-touch-block.scss';

import generalInfo from '/src/general-info.json';

class GetInTouchBlock extends GHComponent {

    constructor() {
        super();
    }
    

    async onServerRender() {
        this.info = generalInfo;

        this.hrefPhone = this.info.phone.replace(/[ ()+-]/g, '');

        super.render(html);
    }
}
window.customElements.define('get-in-touch-block', GetInTouchBlock);