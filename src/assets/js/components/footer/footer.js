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
        let allPages = await gudhub.jsonConstructor({"type":"array","id":1,"childs":[{"type":"property","id":3,"property_name":"title","property_type":"field_value","field_id":"794762","interpretation":1},{"type":"property","id":4,"property_name":"slug","property_type":"field_value","field_id":"794760","interpretation":1}],"property_name":"pages","app_id":"33360","filter":[{"field_id":794760,"data_type":"text","valuesArray":["/","/authors/"],"search_type":"not_equal_or","$$hashKey":"object:1871","selected_search_option_variable":"Value"},{"field_id":794761,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","$$hashKey":"object:1921","selected_search_option_variable":"Value"},{"field_id":794760,"data_type":"text","valuesArray":["blog"],"search_type":"not_contain_or","$$hashKey":"object:1959","selected_search_option_variable":"Value"}],"isSortable":0});
        allPages = allPages.pages;

        this.services = allPages;
         

        super.render(html);

    }

}

if(!customElements.get('footer-component')) {
    customElements.define('footer-component', FooterComponent);
}