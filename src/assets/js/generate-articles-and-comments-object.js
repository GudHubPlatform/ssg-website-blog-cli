export async function generateArticlesAndCommentsObject(filter, value) {
    let comments = {
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
    };
    let articles = {
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
                "id": 3,
                "property_name": "intro",
                "property_type": "field_value",
                "field_id": "794786"
            },
            { 
                "type": "property", 
                "id": 3, 
                "property_name": "intro_id", 
                "property_type": "field_id", 
                "field_id": "794786" 
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
                "property_name": "rating",
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
        "property_name": "articles",
        "app_id": "33361",
        "filter": [
            //type
            {
                "field_id": 794787,
                "data_type": "radio_button",
                "valuesArray": [
                    "0"
                ],
                "search_type": "equal_or",
                "$$hashKey": "object:17515",
                "selected_search_option_variable": "Value"
            },
            //status
            {
                "field_id": 794803,
                "data_type": "radio_button",
                "valuesArray": filter == "slug" ? ["1", "0"] : ["1"],
                "search_type": "equal_or",
                "$$hashKey": "object:17557",
                "selected_search_option_variable": "Value"
            }
        ]
    };


    switch (filter) {
        case "slug":
            articles.filter.push({
                "field_id": 794804,
                "data_type": "text",
                "valuesArray": [
                    value
                ],
                "search_type": "contain_or",
                "$$hashKey": "object:5841",
                "selected_search_option_variable": "Value"
            });
            break;
        case "category":
            articles.filter.push({
                "field_id": 794788,
                "data_type": "item_ref",
                "valuesArray": [
                    value
                ],
                "search_type": "equal_or",
                "$$hashKey": "object:1225",
                "selected_search_option_variable": "Value"
            });
            break;
        case "author":
            articles.filter.push({
                "field_id": 794789,
                "data_type": "item_ref",
                "valuesArray": [
                    value
                ],
                "search_type": "equal_or",
                "$$hashKey": "object:1025",
                "selected_search_option_variable": "Value"
            });
            break;
    }

    let object = {
        "type": "object",
        "id": 3,
        "childs": [
            comments,
            articles
        ],
        "property_name": "articlesAndComments"
    };

    return object;
}
