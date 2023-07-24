import html from './header.html';
import './header.scss';

class Header extends GHComponent {
    constructor() {
        super();
    }

    onServerRender() {
        this.menu = [
            { name: 'Services', childs: [
                { name: 'Web Development', link: '/services/web-development/' }
            ] },
            { name: 'Blog', link: '/blog/' },
            { name: 'Contact Us', link: '/contact-us/' }
        ];

        super.render(html);
    }
    
    openChild(element) {
        if (window.innerWidth < 1200) {
            event.preventDefault()
            element.parentElement.classList.toggle('hover');
        }
    }
    toogleMenu() {
        this.classList.toggle('active');
    }

}

window.customElements.define('header-component', Header);