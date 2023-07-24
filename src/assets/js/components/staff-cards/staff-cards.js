import html from './staff-cards.html';
import './staff-cards.scss';

class StaffCards extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        const json = await super.getGhData(this.ghId);
        this.cards = json.staff;

        super.render(html);
    }

}

window.customElements.define('staff-cards', StaffCards);