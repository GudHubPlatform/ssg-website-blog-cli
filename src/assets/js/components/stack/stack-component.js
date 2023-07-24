import html from './stack.html';
import './stack.scss';

class StackComponent extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        const json = await super.getGhData(this.ghId);

        this.stackList = json.stack_list;

        super.render(html);
    }
    openItem(item) {
        let items = this.querySelectorAll('.raw');
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

window.customElements.define('stack-component', StackComponent);