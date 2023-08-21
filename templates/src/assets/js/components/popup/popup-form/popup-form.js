import html from './popup-form.html';
import './popup-form.scss';

class PopupForm extends GHComponent {
    /**
     * data-form-name - string with name of form (for sending)
     */
    constructor() {
        super();
    }
    
    async onServerRender() {
        this.formName = this.hasAttribute('data-form-name') ? this.getAttribute('data-form-name') : "Get in touch";
        
        super.render(html);
    }

    onClientReady() {
        window.addEventListener('show-success', () => {
            this.classList.remove('show');
        })
    }

    closePopup() {
        this.classList.remove('show');
        window.dispatchEvent( new CustomEvent('close-shadow'));
    }
}

window.customElements.define('popup-form', PopupForm);