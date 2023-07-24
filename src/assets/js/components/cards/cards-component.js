import html from './cards.html';
import './cards.scss';

class CardsComponent extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        const data = await super.getGhData(this.ghId);
        this.cards = data.cards;
        if (data.title) {
            this.isService = true;
        } else {
            this.isService = false;
        }

        super.render(html);
    }

}

window.customElements.define('cards-component', CardsComponent);