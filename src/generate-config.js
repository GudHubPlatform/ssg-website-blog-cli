export function generateConfig(auth_key, apps) {
    return /*javascript*/`
import { components_list as GudhubComponents } from '@gudhub/ssg-web-components-library';

export const build_folder = 'dist';

export const auth_key = "${auth_key.replace(/\n/g, "\\n")}";    

export const chapters = {
    pages: {
        app_id: ${apps.pages.app_id},
        slug_field_id: ${apps.pages.field_list.find(field => field.name_space === 'slug').field_id},
        json_field_id: ${apps.pages.field_list.find(field => field.name_space === 'json').field_id},
        heading_field_id: ${apps.pages.field_list.find(field => field.name_space === 'h1').field_id},
        description_field_id: ${apps.pages.field_list.find(field => field.name_space === 'description').field_id},
        image_field_id: ${apps.pages.field_list.find(field => field.name_space === 'meta_image_src').field_id},
        sitemap: {
            status_field_id: ${apps.pages.field_list.find(field => field.name_space === 'status').field_id},
            frequency: 'weekly',
            priority: 0.8,
            sitemapName: 'pages',
            cases: [
                {
                    case: '/',
                    priority: 1,
                    frequency: 'weekly'
                },
                {
                    case: '/about-us/',
                    priority: 0.5,
                    frequency: 'monthly'
                },
                {
                    case: '/contact-us/',
                    priority: 0.5,
                    frequency: 'monthly'
                }
            ],
            filter: function(items) {
                const status_field_id = this.status_field_id;
                return items.filter(item => {
                    const field = item.fields.find(field => field.field_id == status_field_id);
                    if(field) {
                        return field.field_value == 1;
                    }
                    return false;
                });
            }
        }
    },
    team: {
        app_id: ${apps.team.app_id}
    }
}

export const index_sitemap = true;

export const components_list = [
    ...GudhubComponents,
    {
        tag: 'contact-us-block',
        src: '/src/assets/js/components/contact-us-block/contact-us-block.js'
    },
    {
        tag: 'footer-component',
        src: '/src/assets/js/components/footer/footer.js',
    },
    {
        tag: 'header-component',
        src: '/src/assets/js/components/header/header.js',
    },
    {
        tag: 'team-component',
        src: '/src/assets/js/components/team/team.js',
    },
    {
        tag: 'team-person',
        src: '/src/assets/js/components/team/team-person/team-person.js',
    }
]

export const form_config = [
    {
        "id": "main",
        "title": "Leave Application",
        "subtitle": "",
        "mailConfig": {
            "to": "%",
            "from": "%",
            "subject": "%subject%"
        },
        "inputs": [
            {
                "name": "name",
                "type": "short",
                "required": "true",
                "placeholder": "Name *",
                "width": 6
            },
            {
                "name": "company",
                "type": "short",
                "required": "false",
                "placeholder": "Company",
                "width": 6
            },
            {
                "name": "email",
                "type": "email",
                "required": "true",
                "placeholder": "Email *",
                "errorText": "Enter a valid email",
                "width": 6
            },
            {
                "name": "phone",
                "type": "phone",
                "required": "false",
                "placeholder": "Phone",
                "errorText": "Enter a valid phone number",
                "width": 6
            },
            {
                "name": "message",
                "type": "textarea",
                "required": "false",
                "placeholder": "Comment",
                "width": 12
            }
        ]
    },
    {
        "id": "popup",
        "title": "Leave Application",
        "subtitle": "",
        "mailConfig": {
            "to": "%",
            "from": "%",
            "subject": "%subject%"
        },
        "inputs": [
            {
                "name": "email",
                "type": "email",
                "required": "true",
                "placeholder": "Email *",
                "errorText": "Enter a valid email",
                "width": 6
            },
            {
                "name": "phone",
                "type": "phone",
                "required": "false",
                "placeholder": "Phone",
                "errorText": "Enter a valid phone number",
                "width": 6
            },
            {
                "name": "message",
                "type": "textarea",
                "required": "false",
                "placeholder": "Comment",
                "width": 12
            }
        ]
    },
    {
        "id": "small bottom-right popup",
        "title": "Get a Free Consultation",
        "subtitle": "",
        "mailConfig": {
            "to": "%",
            "from": "%",
            "subject": "%subject%"
        },
        "inputs": [
            {
                "name": "email",
                "type": "email",
                "required": "true",
                "placeholder": "Email *",
                "errorText": "Enter a valid email",
                "width": 12
            },
            {
                "name": "phone",
                "type": "phone",
                "required": "false",
                "placeholder": "Phone",
                "errorText": "Enter a valid phone number",
                "width": 12
            }
        ]
    }
];
`
}