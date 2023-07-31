import html from './article-component.html';
import './article-component.scss';
import authorsObject from './authors-object.json';
import allArticles from './allArticles.json';
import categoriesObject from './categories-object.json';

class ArticleComponent extends GHComponent {

    constructor() {
        super();
        this.rated = false;
    }

    async onServerRender() {
        const url = new URL(window.location.href);
        const articleSlug = url.searchParams.get('path');

        let articleAndComments = await gudhub.jsonConstructor(
            {
                "type": "object",
                "id": 3,
                "childs": [
                    {
                        "type": "array",
                        "id": 1,
                        "childs": [
                            {
                                "type": "property",
                                "id": 3,
                                "property_name": "article_id",
                                "property_type": "field_value",
                                "field_id": "794821",
                                "interpretation": 0
                            }
                        ],
                        "property_name": "comments",
                        "app_id": "33362",
                        "filter": [
                            {
                                "field_id": 794824,
                                "data_type": "radio_button",
                                "valuesArray": [
                                    "1"
                                ],
                                "search_type": "equal_or",
                                "$$hashKey": "object:3549",
                                "selected_search_option_variable": "Value"
                            }
                        ]
                    },
                    {
                        "type": "array",
                        "id": 1,
                        "childs": [
                            {
                                "type": "property",
                                "id": 3,
                                "property_name": "title",
                                "property_type": "field_value",
                                "field_id": "794784",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 4,
                                "property_name": "h1",
                                "property_type": "field_value",
                                "field_id": "794783",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 5,
                                "property_name": "slug",
                                "property_type": "field_value",
                                "field_id": "794804",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 21,
                                "property_name": "content",
                                "property_type": "field_value",
                                "field_id": "794796",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 20,
                                "property_name": "views",
                                "property_type": "field_value",
                                "field_id": "794802",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 19,
                                "property_name": "description",
                                "property_type": "field_value",
                                "field_id": "794785",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 18,
                                "property_name": "posted_at",
                                "property_type": "field_value",
                                "field_id": "794791",
                                "interpretation": 0
                            },
                            {
                                "type": "property",
                                "id": 17,
                                "property_name": "updated_at",
                                "property_type": "field_value",
                                "field_id": "794790"
                            },
                            {
                                "type": "property",
                                "id": 14,
                                "property_name": "author",
                                "property_type": "field_value",
                                "field_id": "794789",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 15,
                                "property_name": "author_id",
                                "property_type": "field_value",
                                "field_id": "794789"
                            },
                            {
                                "type": "property",
                                "id": 16,
                                "property_name": "categories",
                                "property_type": "function",
                                "function": "function(item, appId) {\n  const app = await gudhub.getApp(appId);\n  const categoryField = item.fields.find(field => field.field_id == 794788);\n  if(categoryField) {\n    const categoryItems = categoryField.field_value.split(',');\n    const categoryItemsIds = categoryItems.map(item => Number(item.split('.')[1]));\n    return app.items_list.filter(item => categoryItemsIds.includes(Number(item.item_id)));\n  }\n  return null;\n}"
                            },
                            {
                                "type": "property",
                                "id": 11,
                                "property_name": "thumbnail_src",
                                "property_type": "field_value",
                                "field_id": "794800",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 13,
                                "property_name": "thumbnail_alt",
                                "property_type": "field_value",
                                "field_id": "794799",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 10,
                                "property_name": "id",
                                "property_type": "variable",
                                "variable_type": "current_item"
                            },
                            {
                                "type": "property",
                                "id": 12,
                                "property_name": "thumbnail_title",
                                "property_type": "field_value",
                                "field_id": "794798",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 9,
                                "property_name": "thumbnail",
                                "property_type": "field_value",
                                "field_id": "794797",
                                "interpretation": 1
                            },
                            {
                                "type": "property",
                                "id": 6,
                                "property_name": "category",
                                "property_type": "field_value",
                                "field_id": "794788"
                            },
                            {
                                "type": "property",
                                "id": 7,
                                "property_name": "ratings",
                                "property_type": "function",
                                "function": "function(item, appId) {\n  const app = await gudhub.getApp(appId)\n  let ratings = item.fields.find(field => field.field_id == 794801);\n  let summ = 0;\n  if(ratings) {\n    ratings = ratings.field_value.split(',');\n    ratings.forEach(item => summ += Number(item));\n  }\n  return {\n    count: ratings.length || 0,\n    avg: summ / ratings.length\n  };\n}"
                            },
                            {
                                "type": "property",
                                "id": 8,
                                "property_name": "time_to_read",
                                "property_type": "field_value",
                                "field_id": "794795",
                                "interpretation": 1
                            }
                        ],
                        "property_name": "article",
                        "app_id": "33361",
                        "filter": [
                            {
                                "field_id": 794804,
                                "data_type": "text",
                                "valuesArray": [
                                    articleSlug
                                ],
                                "search_type": "contain_or",
                                "$$hashKey": "object:5841",
                                "selected_search_option_variable": "Value"
                            }
                        ]
                    }
                ],
                "property_name": "articlesAndComments"
            });
            console.log('articleAndComments',articleAndComments)
        let comments = articleAndComments.articlesAndComments.comments;
        this.article = articleAndComments.articlesAndComments.article[0];

        const ogSiteImage = document.createElement('meta');
        ogSiteImage.setAttribute('property', 'og:image');
        ogSiteImage.setAttribute('content', `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${this.article.thumbnail_src}`);
        document.querySelector('head').prepend(ogSiteImage);

        const twitterSiteImage = document.createElement('meta');
        twitterSiteImage.setAttribute('name', 'twitter:image');
        twitterSiteImage.setAttribute('content', `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${this.article.thumbnail_src}`);
        document.querySelector('head').prepend(twitterSiteImage);
        
        let commentsQuantity = 0;
        for (let comment in comments) {
            if (comments[comment].article_id == this.article.id) {
                commentsQuantity++;
            }
        }
        this.article.commentsQuantity = commentsQuantity;

        this.articleReference = this.article.id;

        const authors = await gudhub.jsonConstructor(authorsObject);
        console.log('authors',authors)
        this.authors = authors.authors;
        
        const categories = await gudhub.jsonConstructor(categoriesObject);
        console.log('categories',categories)


        // CATEGORIES
        this.article.ratings.avg = Number(this.article.ratings.avg.toFixed(1))
        const post = this.article;
        post.category = [];
        for (let category in post.categories) {
            let categoryName = post.categories[category].fields.find(field => field.field_id == window.constants.chapters.blog.heading_field_id).field_value;
            let categorySlug = post.categories[category].fields.find(field => field.field_id == window.constants.chapters.blog.slug_field_id).field_value;
            let categoryObject = {
                "name": categoryName,
                "slug": categorySlug
            }
            post.category.push(categoryObject)
        }
        this.article.categories = post.category;
        delete this.article.category;

        this.breadcrumbs = JSON.stringify([
            {
                "title": "Blog",
                "slug": "/blog/"
            },
            {
                "title": this.article.categories[0].name,
                "slug": this.article.categories[0].slug
            },
            {
                "title": this.article.h1
            }
        ]);
        // AUTHORS
        this.author = this.authors.find(author => {
            if (author.author_id == this.article.author_id) {
                return author
            }
        });
        this.article.author_slug = this.author.slug
        this.article.author_linkedin = this.author.linkedin
        this.article.author_facebook = this.author.facebook

        const articleId = this.article.id.split('.')[1];
        const authorId = this.author.author_id.split('.')[1];
console.log(articleId)
        this.author.description = await gudhub.getInterpretationById(window.constants.chapters.blog.app_id, authorId, window.constants.chapters.blog.intro_field_id, 'html');
        console.log('this.author.description', this.author.description)
        this.content = await gudhub.getInterpretationById(window.constants.chapters.blog.app_id, articleId, window.constants.chapters.blog.content_field_id, 'html');
console.log('this.content',this.content)
        const getContent = (link) => {
            return new Promise(async (resolve) => {
                const response = await fetch(link);
                const content = await response.text();
                const div = document.createElement('div');
                div.insertAdjacentHTML('beforeend', content);
                resolve(div.innerText);
            });
        }
        console.log('this.author.position',this.author.position)
        this.author.position = await getContent(this.author.position);

        // SIDEBAR
        let content = JSON.parse(this.article.content);
        this.headings = [];
        for (let block in content.blocks) {
            if (content.blocks[block].type === 'header') {
                this.headings.push(content.blocks[block].data)
            }
        }

        this.articles = await gudhub.jsonConstructor(allArticles);
        console.log('this.articles',this.articles)
        for (let article = 0; article < this.articles.all_articles.length; article++) {
            if (this.article.slug == this.articles.all_articles[article].slug) {
                this.articles.all_articles.splice(article, 1)
            }
        }

        this.articles = this.articles.all_articles.slice(0, 3);
        for (let article in this.articles) {
            let postrCategories = [];
            for (let category in this.articles[article].categories) {
                let categoryName = this.articles[article].categories[category].fields.find(field => field.field_id == window.constants.chapters.blog.heading_field_id).field_value;
                let categorySlug = this.articles[article].categories[category].fields.find(field => field.field_id == window.constants.chapters.blog.slug_field_id).field_value;
                let categoryObject = {
                    "name": categoryName,
                    "slug": categorySlug
                }
                postrCategories.push(categoryObject)
            }
            this.articles[article].categories = postrCategories;
        }

        super.render(html);
        const images = this.querySelector('.content').querySelectorAll('img:not(img.gif)');

            images.forEach(image => {
                let src = image.getAttribute('src');
                if (src.substring(src.lastIndexOf('.'), src.length) != '.gif') {
                
                const imageComponent = document.createElement('image-component');
                try {
                    if(image.hasAttribute('data-url')) {
                        imageComponent.setAttribute('data-src', image.getAttribute('data-url').replace(/&quot/, '"'));
                        imageComponent.setAttribute('data-url', image.getAttribute('src').replace(/&quot/, '"'));
                    } else {
                        imageComponent.setAttribute('src', image.getAttribute('src').replace(/&quot/, '"'));
                    }
                    imageComponent.setAttribute('alt', image.getAttribute('alt'));
                    imageComponent.setAttribute('title', image.getAttribute('title'));
                    imageComponent.setAttribute('lazyload', true);
                    imageComponent.setAttribute('width', '830');
                    imageComponent.setAttribute('height', '300');
                    image.replaceWith(imageComponent);
                } catch(err) {
                    console.log(image);
                    console.log(err);
                }
            }
        });
        const h2 = this.querySelector('.content').querySelectorAll('h2');

        h2.forEach(title => {
            title.id = title.innerText.toLowerCase().replace(/[^\w\s]/g, '-').replace(/ /g, '-').replace(/-$/, '').replace(/^-/, '');
        });

        const h3 = this.querySelector('.content').querySelectorAll('h3');

        h3.forEach(title => {
            title.id = title.innerText.toLowerCase().replace(/[^\w\s]/g, '-').replace(/ /g, '-').replace(/-$/, '').replace(/^-/, '');
        });

        // SCHEMAS
        if(!document.head.querySelector('#articleSchema')) {
            const schemaForAuthors = [
                {
                    "@type": "Person",
                    "name": this.article.author,
                    "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${this.article.author_slug}`
                }
            ];
            // 
            const schema = {
                "@context": "https://schema.org",
                "@type": "Article",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}${this.article.slug}`
                },
                "headline": this.article.h1,
                "image": [
                    `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}` + this.article.thumbnail_src
                ],
                "datePublished": new Date(Number(this.article.posted_at)),
                "dateModified": new Date(this.article.updated_at ? +this.article.updated_at : Number(this.article.posted_at)),
                "author": schemaForAuthors
            }
            
            document.head.innerHTML += `
                    <script id="articleSchema" type="application/ld+json">${JSON.stringify(schema)}</script>
                `;

            }

        if(!document.head.querySelector('#productSchema')) {
          
          const schema = {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": this.article.title,
            "url": `${window.MODE === 'production' ? 'https' : 'http'}://${window.constants.website}` + this.article.slug,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": this.article.ratings.avg.toFixed(1),
                "ratingCount": this.article.ratings.count,
                "bestRating": 5,
                "worstRating": 1,
                "author": window.constants.info.legalName,
                "item": this.article.h1
            }
        }
          
          document.head.innerHTML += `
                <script id="productSchema" type="application/ld+json">${JSON.stringify(schema)}</script>
            `;

        }
        console.log(9)
    }
    async onClientReady () {
        let ratings = {};

        if ( localStorage.getItem('ratings') != null ) {
            ratings = JSON.parse(localStorage.getItem('ratings'));
            let currentRating = 6 - ratings[window.location.pathname];
            this.renderRating(currentRating);
        }
        fetch('https://gudhub.com/api/services/prod/api/31596/increase-views', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                slug: window.location.pathname
            })
        })
    }
    renderRating(grade) {
        let itemsList = this.querySelectorAll('.rate_us .rating > div');

        for (let iterationItem = 0; iterationItem < itemsList.length; iterationItem++) {
            itemsList[iterationItem].classList.remove('active')
            if (itemsList[iterationItem].getAttribute('data-grade') >= grade) {
                itemsList[iterationItem].classList.add('active')
            }
        }
    }

    updateRating(item) {
        
        if (!this.rated) {
            this.rated = true
            let ratings = {};
    
            if ( localStorage.getItem('ratings') != null ) {
                ratings = JSON.parse(localStorage.getItem('ratings'));
            }
    
            const grade = item.getAttribute('data-grade');
    
            this.renderRating(grade);
    
            const customerRating = 6 - grade;
            
            fetch('https://gudhub.com/api/services/prod/api/31596/add-rating-test', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    slug: window.location.pathname,
                    rating: customerRating
                })
            })
            ratings[window.location.pathname] = customerRating;
            localStorage.setItem('ratings', JSON.stringify(ratings));
        }
    }

    showPopup(item) {
        item.parentElement.classList.add('active');
    }
    hidePopup(item) {
        let shadow = this.querySelector('.background_shadow');
        if (event.target == shadow || item.classList.contains('close')) {
            this.querySelector('.meta_share .share').classList.remove('active');
        }
    }

    copy(item) {
        let copyText = item.querySelector(".link");
        let copyLink = item;

        let self = this;
        window.location.protocol === "https:" ? clipboardCopy(copyText, self) : clipboardCopy(copyText, self);
        function clipboardCopy(copyText, self) {
            navigator.clipboard
                .writeText(copyText.innerText)
                .then(() => {
                    item.querySelector('.copied') ? item.querySelector('.copied').classList.add('true') : '';
                })
                .catch(() => {
                    item.querySelector('.copied') ? item.querySelector('.copied').innerText = "Error!" : '';
                    item.querySelector('.copied') ? self.querySelector('.copied').classList.add('false') : '';
                });
        }
        copyLink.addEventListener("copy", function (event) {
            event.preventDefault();
            if (event.clipboardData) {
                event.clipboardData.setData("text/plain", copyText.innerText);
                item.querySelector('.copied') ? item.querySelector('.copied').classList.add('true') : '';
            }
        });
    }
}

window.customElements.define('article-component', ArticleComponent);