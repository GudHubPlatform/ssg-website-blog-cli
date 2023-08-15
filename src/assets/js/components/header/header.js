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
