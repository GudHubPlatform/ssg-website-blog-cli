import html from './fullscreen-image-and-accordeon.html';
import './fullscreen-image-and-accordeon.scss';

class FullscreenImageAndAccordeon extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;

        this.json = await super.getGhData(this.ghId);

        this.withoutSubtitle = this.hasAttribute('data-subtitle') ? this.getAttribute('data-subtitle') : 'false';

        this.items = this.json.items;

        this.image = this.json.image;

        super.render(html);
    }

    onClientReady() {
        setTimeout(() => {
            const image = this.querySelector('.image img');
            const imageHeight = image.offsetHeight;
            image.style.height = `${imageHeight}px`;
        }, 0);

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

window.customElements.define('fullscreen-image-and-accordeon', FullscreenImageAndAccordeon);