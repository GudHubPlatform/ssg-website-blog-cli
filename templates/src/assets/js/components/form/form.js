import html from './form.html';
import './form.scss';
import { sendEmail } from '../../sendEmail.js';

class FormComponent extends GHComponent {
    /**
     * data-button-text - value is a string which will display on form submit button
     * data-form-name - string with name of form (for sending)
     * data-no-flex - its no flex for inputs in form
     */
    constructor() {
        super();
        this.formName = this.hasAttribute('data-form-name') ? this.getAttribute('data-form-name') : "Get in touch";
        this.popup = this.hasAttribute('data-type') ? this.getAttribute('data-type') : false;
    }

    onServerRender() {

        this.buttonText = this.hasAttribute('data-button-text') ? this.getAttribute('data-button-text') : 'Get in touch';

        super.render(html);

    }

    async sendEmail(element) {
        event.preventDefault();
        let res = await sendEmail(element, this.formName);
        let email = this.querySelector('[name="email"]').value;
        let phone = this.querySelector('[name="phone"]').value;
        if (this.popup && res) {
            if (!document.querySelector('.show_shadow')) {
                window.dispatchEvent( new CustomEvent('open-shadow'));
            }
            window.dispatchEvent( new CustomEvent('show-success', {
                detail: {
                    email: email,
                    phone: phone
                }
            }));
        }
    }
    closePopupSuccess() {
        let shows = document.querySelectorAll('popup-success.show');
        for (let popup = 0; popup < shows.length; popup++) {
            shows[popup].classList.remove('show');
        }
        this.querySelector('.popup_shadow').classList.remove('show_shadow');
    }
}

if(!customElements.get('form-component')) {
    customElements.define('form-component', FormComponent);
}