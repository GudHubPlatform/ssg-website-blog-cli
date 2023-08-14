import html from './header.html';
import './header.scss';

class Header extends GHComponent {
    constructor() {
        super();
    }

    onServerRender() {
        // List of objects like a nested-list for generating menu in header
        this.menu = [
            { name: 'Home', link: '/' },
            { name: 'Services', childs: [
                { name: 'Web Development', link: '/services/web-development/' }
            ] },
            { name: 'Blog', link: '/blog/', childs: [
                { name: 'Web Development', link: '/blog/web-dev/' }
            ] },
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