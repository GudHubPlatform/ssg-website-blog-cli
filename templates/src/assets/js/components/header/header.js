import html from './header.html';
import './header.scss';

import pagesObject from './pages-object.json';

class Header extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        // List of objects like a nested-list for generating menu in header

        let mainPages = await gudhub.jsonConstructor(pagesObject);

        let pages = mainPages.allPages.pages;

        let categories = mainPages.allPages.categories;

        let allPages = pages.concat(categories)
        
        let services = allPages.filter(page => page.link.includes('/services/'));
        let anotherPages = allPages.filter(page => !page.link.includes('/services/') && !page.link.includes('/blog/'));
        
        // Method to creating nested list in any queue
        anotherPages.splice(1, 0, {name: "Services", childs: services})
        anotherPages.splice(3, 0, {name: "Blog", link: "/blog/", childs: categories})

        this.menu = anotherPages;
        
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

    openChild(element) {
        if (window.innerWidth < 1200) {
            event.preventDefault()
            element.parentElement.classList.toggle('hover');
        }
    }
    toogleMenu() {
        this.classList.toggle('active');
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

window.customElements.define('header-component', Header);
