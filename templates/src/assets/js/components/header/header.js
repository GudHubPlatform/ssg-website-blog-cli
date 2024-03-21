import html from './header.html';
import './header.scss';

class Header extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        this.menu = [
            { name: 'Solutions', link: '#solutions',
                childs: [
                    {name: 'Prices', link: '#prices'},
                    { name: 'Components', link: '/components/' },
                    { name: 'Blog', link: '/blog/'},
                    {name: 'About Us', link: '/about-us/'},
                    {name: 'Contact Us', link: '/contact-us/'}
                ]
            },
            { name: 'Prices', link: '#prices'},
            { name: 'Components', link: '/components/' },
            { name: 'Blog', link: '/blog/'},
            { name: 'About Us', link: '/about-us/'},
            { name: 'Contact Us', link: '/contact-us/'}
        ];
        
        this.theme = this.hasAttribute('data-light-letters');
        
        super.render(html);
    }
    
    onClientReady() {
        if (window.scrollY > 50) {
            this.classList.add('scrolled');
        } else {
            this.classList.remove('scrolled');
        }
        window.addEventListener("scroll", (e) => {
            if (e.target.scrollingElement.scrollTop > 50) {
                this.classList.add('scrolled');
            } else {
                this.classList.remove('scrolled');
            }
        })
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
