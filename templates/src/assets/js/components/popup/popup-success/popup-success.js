import html from './popup-success.html';
import './popup-success.scss';

class PopupSuccess extends GHComponent {
    constructor() {
        super();
    }
    
    async onServerRender() {
        super.render(html);
    }

    onClientReady() {
        window.addEventListener('show-success', (e) => {
            this.querySelector('.phone').innerHTML = '';
            this.querySelector('.email').innerHTML = '';
            this.querySelector('.phone_entity').classList.remove('show');
            this.querySelector('.email').innerHTML = e.detail.email;
            if (e.detail.phone.length > 0) {
                this.querySelector('.phone_entity').classList.add('show');
                this.querySelector('.phone').innerHTML = e.detail.phone;
            }
            this.classList.add('show');
        });
        window.addEventListener('open-shadow', () => {
            if (!document.querySelector('.success_only.show_shadow')) {
                this.parentElement.classList.contains('success_only') ? this.parentElement.classList.add('show_shadow') : '';
            }
        });
        window.addEventListener('close-shadow', () => {
            let shows = document.querySelectorAll('popup-success.show');
            for (let popup = 0; popup < shows.length; popup++) {
                shows[popup].classList.remove('show');
            }
        })
    }
    closePopup() {
        let shows = document.querySelectorAll('popup-success.show');
            for (let popup = 0; popup < shows.length; popup++) {
                shows[popup].classList.remove('show');
            }
        window.dispatchEvent( new CustomEvent('close-shadow'));
    }
}

window.customElements.define('popup-success', PopupSuccess);