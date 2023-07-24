import html from './footer.html';
import './footer.scss';

class FooterComponent extends GHComponent {
    
    constructor() {
        super();
    }

    async onServerRender() {
        this.menu = [
            { title: 'Contact Us', slug: '/contact-us/' }
        ];
        let allPages = await gudhub.jsonConstructor({"type":"array","id":1,"childs":[{"type":"property","id":3,"property_name":"h1","property_type":"field_value","field_id":"722787","interpretation":1},{"type":"property","id":3,"property_name":"title","property_type":"field_value","field_id":"711001","interpretation":1},{"type":"property","id":4,"property_name":"slug","property_type":"field_value","field_id":"710999","interpretation":1}],"property_name":"pages","app_id":"31140","filter":[{"field_id":710999,"data_type":"text","valuesArray":["/","/authors/"],"search_type":"not_equal_or","$$hashKey":"object:7273","selected_search_option_variable":"Value"},{"field_id":710999,"data_type":"text","valuesArray":["blog"],"search_type":"not_contain_or","$$hashKey":"object:7676","selected_search_option_variable":"Value"},{"field_id":722834,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:1814","selected_search_option_variable":"Value"}]});
        allPages = allPages.pages;

        this.services = [];
        this.companyPages = [];
        this.newJerseyServices = [];
        this.newYorkServices = [];
        
        for (let page in allPages) {
            if (allPages[page].slug.includes('services')) {
                if (allPages[page].slug.includes('-new-jersey')) {
                    this.newJerseyServices.push(allPages[page]);
                } else if (allPages[page].slug.includes('-new-york')) {
                    this.newYorkServices.push(allPages[page]);
                } else {
                    this.services.push(allPages[page]);
                }
            } else {
                this.companyPages.push(allPages[page]);
            }
        }
         

        super.render(html);

    }

}

if(!customElements.get('footer-component')) {
    customElements.define('footer-component', FooterComponent);
}