import html from './subscribe-mail.html';
import './subscribe-mail.scss';

import { sendEmail } from '../../sendEmail.js';

class SubscribeMail extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        super.render(html);
    }

    async sendEmail(element) {
        event.preventDefault();
        let res = await sendEmail(element, "Subscribe");
        if (res) {
            this.querySelector('.input').classList.add('success')
            this.querySelector('.hint').classList.add('success')
        }
    }
}

window.customElements.define('subscribe-mail', SubscribeMail);