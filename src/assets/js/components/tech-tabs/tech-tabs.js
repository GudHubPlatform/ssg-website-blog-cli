import html from './tech-tabs.html';
import './tech-tabs.scss';

class TechTabs extends GHComponent {
    constructor() {
        super();
    }

    async onServerRender() {
        this.ghId = this.getAttribute('data-gh-id') || null;
        
        const json = await super.getGhData(this.ghId);

        this.tabs = json.tabs;

        super.render(html);
    }

    openTab(tab) {
        let tabs = this.querySelectorAll('.tab_item');
        let tabTarget = tab
        if (window.innerWidth < 990) {
            if (tabTarget.parentElement.classList.contains('active')) {
                tabTarget.parentElement.classList.remove('active');
            } else {
                this.toggleClasses(tabs, tabTarget);
            }
        } else {
            this.toggleClasses(tabs, tabTarget);
        }
    }

    toggleClasses(tabs, tabTarget) {
        tabs.forEach(element => {
            element.classList.remove('active');
        });
        tabTarget.parentElement.classList.add('active');
    }
}

window.customElements.define('tech-tabs', TechTabs);