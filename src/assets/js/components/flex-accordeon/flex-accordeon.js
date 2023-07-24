import html from './flex-accordeon.html';
import './flex-accordeon.scss';

class FlexAccordeon extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        this.json = await super.getGhData(this.ghId);

        let items = this.json.items;
        this.leftItems = items.slice(0, items.length / 2);
        this.rightItems = items.slice(items.length / 2, items.length);

        super.render(html);
    }

    openItem(item) {
        let items = this.querySelectorAll('.accordeon_item');
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            items.forEach(element => {
                element.classList.remove('active');
            });
            item.classList.add('active')
        }
    }

}

window.customElements.define('flex-accordeon', FlexAccordeon);