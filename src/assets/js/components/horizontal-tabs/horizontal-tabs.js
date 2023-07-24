import html from './horizontal-tabs.html';
import './horizontal-tabs.scss';

class HorizontalTabs extends GHComponent {
    constructor() {
        super();
    }
    
    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        this.beSlider = this.hasAttribute('be-slider');
        
        const json = await super.getGhData(this.ghId);

        this.items = json.items;
        
        super.render(html);
    }

    openItem(item) {
        let items = this.querySelectorAll('.horizontal_tabs_item');
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            items.forEach(element => {
                element.classList.remove('active')
            });
            item.classList.add('active')
        }
    }
}

window.customElements.define('horizontal-tabs', HorizontalTabs);