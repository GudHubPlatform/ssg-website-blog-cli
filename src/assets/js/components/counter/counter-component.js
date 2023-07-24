import html from './counter.html';
import './counter.scss';

class CounterComponent extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        this.json = await super.getGhData(this.ghId);

        const url = new URL(window.location.href);
        
        this.isService = url.searchParams.get('path').includes('/services/')

        const customMargin = this.hasAttribute('data-margin') ? this.getAttribute('data-margin') : '0 20px';
        
        this.style.setProperty('--custom-margin', customMargin);

        this.counterList = this.json.counter_items;

        this.type = this.getAttribute('data-type') || null;
        
        this.button = this.json.button || null;

        super.render(html);
    }

}

window.customElements.define('counter-component', CounterComponent);