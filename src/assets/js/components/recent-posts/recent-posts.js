import html from './recent-posts.html';
import './recent-posts.scss';

class RecentPosts extends GHComponent {
    constructor() {
        super();
    }
    
    async onServerRender() {
        let articlesAndComments = await gudhub.jsonConstructor({"type":"object","id":2,"childs":[{"type":"array","id":2,"childs":[{"type":"property","id":18,"$$hashKey":"object:7657","property_name":"article_id","property_type":"field_value","field_id":"720865"}],"property_name":"comments","app_id":"31680","filter":[{"field_id":720868,"data_type":"radio_button","valuesArray":["0"],"search_type":"equal_or","selected_search_option_variable":"Value","$$hashKey":"object:7612"}],"isSortable":0},{"type":"array","id":1,"childs":[{"type":"property","id":3,"property_name":"title","property_type":"field_value","field_id":"717953","interpretation":1,"$$hashKey":"object:7342"},{"type":"property","id":3,"property_name":"h1","property_type":"field_value","field_id":"744779","interpretation":1,"$$hashKey":"object:7342"},{"type":"property","id":4,"property_name":"slug","property_type":"field_value","field_id":"717956","interpretation":1,"$$hashKey":"object:7343"},{"type":"property","id":5,"property_name":"thumbnail","property_type":"field_value","field_id":"717961","interpretation":1,"$$hashKey":"object:7344"},{"type":"property","id":17,"property_name":"posted_at","property_type":"field_value","field_id":"717958","$$hashKey":"object:7345"},{"type":"property","id":6,"property_name":"thumbnail_src","property_type":"field_value","field_id":"717964","interpretation":1,"$$hashKey":"object:7346"},{"type":"property","id":15,"property_name":"categories","property_type":"function","function":"function(item, appId) {\n  const app = await gudhub.getApp(appId);\n  const categoryField = item.fields.find(field => field.field_id == 717969);\n  if(categoryField) {\n    const categoryItems = categoryField.field_value.split(',');\n    const categoryItemsIds = categoryItems.map(item => Number(item.split('.')[1]));\n    return app.items_list.filter(item => categoryItemsIds.includes(Number(item.item_id)));\n  }\n  return null;\n}","$$hashKey":"object:7347"},{"type":"property","id":16,"property_name":"rating","property_type":"function","function":"function(item, appId, gudhub) {\n  const app = await gudhub.getApp(appId);\n  let ratings = item.fields.find(field => field.field_id == 717965);\n  let summ = 0;\n  if(ratings) {\n    ratings = ratings.field_value.split(',');\n    ratings.forEach(item => summ += Number(item));\n  }\n  return {\n    count: ratings.length || 0,\n    avg: summ / ratings.length\n  };\n}","$$hashKey":"object:7348"},{"type":"property","id":8,"property_name":"thumbnail_title","property_type":"field_value","field_id":"717962","interpretation":1,"$$hashKey":"object:7349"},{"type":"property","id":13,"property_name":"id","property_type":"variable","variable_type":"current_item","$$hashKey":"object:7350"},{"type":"property","id":11,"property_name":"views","property_type":"field_value","field_id":"717966","interpretation":1,"$$hashKey":"object:7351"},{"type":"property","id":7,"property_name":"thumbnail_alt","property_type":"field_value","field_id":"717963","interpretation":1,"$$hashKey":"object:7352"},{"type":"property","id":10,"property_name":"time_to_read","property_type":"field_value","field_id":"717959","interpretation":1,"$$hashKey":"object:7353"},{"type":"property","id":14,"property_name":"intro_id","property_type":"field_id","field_id":"717955","interpretation":0},{"type":"property","id":12,"property_name":"author_id","property_type":"field_value","field_id":"717968","interpretation":0,"$$hashKey":"object:7355"},{"type":"property","id":9,"property_name":"author","property_type":"field_value","field_id":"717968","interpretation":1,"$$hashKey":"object:7356"}],"property_name":"articles","app_id":"31595","filter":[{"field_id":717952,"data_type":"radio_button","valuesArray":["0"],"search_type":"equal_or","selected_search_option_variable":"Value"},{"field_id":717957,"data_type":"radio_button","valuesArray":["1"],"search_type":"equal_or","selected_search_option_variable":"Value"}],"isSortable":1,"field_id_to_sort":"717958","sortType":"desc"}],"property_name":"articlesAndComments"});
        let articles = articlesAndComments.articlesAndComments.articles;
        let comments = articlesAndComments.articlesAndComments.comments;

        const authors = await gudhub.jsonConstructor({ "type": "array", "id": 1, "childs": [ { "type": "property", "id": 3, "property_name": "name", "property_type": "field_value", "field_id": "717953", "interpretation": 1 }, { "type": "property", "id": 4, "property_name": "author_id", "property_type": "variable", "field_id": "", "variable_type": "current_item" }, { "type": "property", "id": 5, "property_name": "slug", "property_type": "field_value", "field_id": "717956", "interpretation": 1 } ], "property_name": "authors", "app_id": "31595", "filter": [ { "field_id": 717952, "data_type": "radio_button", "valuesArray": [ "1" ], "search_type": "equal_or", "$$hashKey": "object:2369", "selected_search_option_variable": "Value" }, { "field_id": 717957, "data_type": "radio_button", "valuesArray": [ "1" ], "search_type": "equal_or", "$$hashKey": "object:2411", "selected_search_option_variable": "Value" } ], "isSortable": 0 });
        this.authors = authors.authors;

        this.articles = articles.slice(0, 3);
        for (let article in this.articles) {
            let commentsQuantity = 0;
            for (let comment in comments) {
                if (comments[comment].article_id == this.articles[article].id) {
                    commentsQuantity++;
                }
            }
            this.articles[article].commentsQuantity = commentsQuantity;
        }

        for (let article = 0; article < this.articles.length; article++) {
            // CATEGORIES
            this.articles[article].rating.avg = Number(this.articles[article].rating.avg.toFixed(1));
            const post = this.articles[article];
            post.category = [];
            for (let category in post.categories) {
                let categoryName = this.articles[article].categories[category].fields.find(field => field.field_id == window.constants.chapters.blog.heading_field_id).field_value;
                let categorySlug = this.articles[article].categories[category].fields.find(field => field.field_id == 717956).field_value;
                let categoryObject = {
                    "name": categoryName,
                    "slug": categorySlug
                }
                post.category.push(categoryObject)
            }
            this.articles[article].categories = post.category;
            delete this.articles[article].category;

            // AUTHORS
            let authorSlug = this.authors.find(author => {
                if (author.author_id == this.articles[article].author_id) {
                    return author
                }
            });
            this.articles[article].author_slug = authorSlug.slug
        }

        // INTRO
        const promises = [];
        this.articles.forEach((article, index) => {
            promises.push(new Promise(async (resolve) => {
                let content = await gudhub.getInterpretationById(window.constants.chapters.blog.app_id, article.id.split('.')[1], article.intro_id, 'html');
                this.articles[index].intro = content;
                resolve();
            }));
        });

        await new Promise(resolve => {
            Promise.all(promises).then(() => {
                resolve();
            })
        });

        super.render(html);
    }

    openArticle(post) {
        if (event.target.tagName != 'A' ) {
            let href = post.querySelector('.post_left a').href;
            window.location.href = href;
        }
    }
}

window.customElements.define('recent-posts', RecentPosts);