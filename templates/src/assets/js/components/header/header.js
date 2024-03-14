import html from './header.html';
import './header.scss';

class Header extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        this.menu = [
            { name: 'Рішення', link: '#solutions',
                childs: [
                    {name: 'CRM Для Кол Центру', link: '/crm-koll-tsentr/'},
                    {name: 'CRM Для Навчального центру', link: '/crm-navchalnyj-tsentr/'},
                    {name: 'CRM Для Школи', link: '/crm-shkola/'},
                    {name: 'CRM Для HR', link: '/crm-hr/'},
                    {name: 'CRM Для Фітнес Клубу', link: '/crm-fitnes-klub/'}
                ]
            },
            { name: 'Ціни', link: '#prices'},
            { name: 'Блог', link: '/blog/'},
            { name: 'Про Нас', link: '/about-us/'},
            { name: 'Контакти', link: '/contact-us/'}
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
