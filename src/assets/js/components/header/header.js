import html from './header.html';
import './header.scss';

class Header extends GHComponent {
    constructor() {
        super();
    }

    onServerRender() {
        this.menu = [
            { name: 'Services', childs: [
                { name: 'Custom Software Development', link: '/services/custom-software-development/' },
                { name: '.Net Development', link: '/services/dot-net-development/' },
                { name: 'SaaS Development', link: '/services/saas-development/' },
                { name: 'Business Technology Consulting', link: '/services/business-technology-consulting/' },
                { name: 'System Integration', link: '/services/system-integration/' },
                { name: 'Data Migration', link: '/services/data-migration/' },
                { name: 'Microsoft Access Programming', link: '/services/microsoft-access/' },
                { name: 'Database Development', link: '/services/database-development/' },
                { name: 'Web App Development', link: '/services/web-application-development/' },
                { name: 'Mobile App Development', link: '/services/mobile-app-development/' },
                { name: 'Mobile App Design', link: '/services/mobile-app-design/' },
            ] },
            { name: 'Our Difference', link: '/our-difference/' },
            { name: 'Technologies We Support', link: '/technologies-we-support/' },
            { name: 'Blog', link: '/blog/' },
            { name: 'Company', childs: [
                { name: 'Mission Statement', link: '/mission-statement/' },
                { name: 'Principal Consultants', link: '/principal-consultants/' },
                { name: 'Opportunities', link: '/opportunities/' },
                { name: 'About Us', link: '/about-us/' }
            ] },
            { name: 'Contact Us', link: '/contact-us/' }
        ];

        super.render(html);
    }

    onClientReady() {
        const activePath = window.location.pathname;
        const menu = this.querySelector('.menu').querySelectorAll('a');

        menu.forEach((item) => {
            if (item.getAttribute('href') === activePath) {
                item.parentElement.classList.add('active');
            }
        });
    }
    
    openChild(element) {
        if (window.innerWidth < 1150) {
            event.preventDefault()
            element.parentElement.classList.toggle('active');
        }
    }
    toogleMenu() {
        this.classList.toggle('active');
    }

}

window.customElements.define('header-component', Header);