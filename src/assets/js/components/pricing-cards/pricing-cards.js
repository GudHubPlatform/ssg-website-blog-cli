import html from './pricing-cards.html';
import './pricing-cards.scss';

class PricingCards extends GHComponent {
    constructor() {
        super();
    }
    
    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        const json = await super.getGhData(this.ghId);

        this.items = json.cards;
        
        super.render(html);
    }

    onClientReady() {
        window.addEventListener('close-shadow', () => {
            let allShadows = this.querySelectorAll('.show_shadow');
            if (allShadows) {
                for (let shadow = 0; shadow < allShadows.length; shadow++) {
                    allShadows[shadow].classList.remove('show_shadow');
                }
            }
            let shows = document.querySelectorAll('popup-success.show');
            for (let popup = 0; popup < shows.length; popup++) {
                shows[popup].classList.remove('show');
            }
        });
    }

    openPopup(item) {
        if (event.target.classList.contains('popup_button')) {
            item.querySelector('.popup_shadow').classList.add('show_shadow');
            item.querySelector('.popup_shadow popup-form').classList.add('show');
        }
    }
    closePopup() {
        if (event.target.classList.contains('popup_shadow')) {
            window.dispatchEvent( new CustomEvent('close-shadow'));
        } 
    }
}

window.customElements.define('pricing-cards', PricingCards);