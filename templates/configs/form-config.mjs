export const formConfig = [
    {
        id: 'main',
        title: 'Залишити Заявку',
        subtitle: '',
        mailConfig: {
            to: 'atlasiko',
            from: 'atlasiko',
            subject: 'GudHub UA'
        },
        inputs: [
            {
                name: 'name',
                type: 'short',
                required: "true",
                placeholder: "Ім'я *",
                width: 6
            },
            {
                name: 'company',
                type: 'short',
                required: "false",
                placeholder: "Компанія",
                width: 6
            },
            {
                name: 'email',
                type: 'email',
                required: "true",
                placeholder: "E-mail *",
                errorText: 'Введіть коректний E-mail',
                width: 6
            },
            {
                name: 'phone',
                type: 'phone',
                required: "false",
                placeholder: "Телефон",
                errorText: 'Введіть коректний телефон',
                width: 6
            },
            {
                name: 'message',
                type: 'textarea',
                required: "false",
                placeholder: "Коментар",
                width: 12
            }
        ]
    },
    {
        id: 'popup',
        title: 'Залишити Заявку',
        subtitle: '',
        mailConfig: {
            to: 'atlasiko',
            from: 'atlasiko',
            subject: 'GudHub UA'
        },
        inputs: [
            {
                name: 'email',
                type: 'email',
                required: "true",
                placeholder: "E-mail *",
                errorText: 'Введіть коректний E-mail',
                width: 6
            },
            {
                name: 'phone',
                type: 'phone',
                required: "false",
                placeholder: "Телефон",
                errorText: 'Введіть коректний телефон',
                width: 6
            },
            {
                name: 'message',
                type: 'textarea',
                required: "false",
                placeholder: "Коментар",
                width: 12
            }
        ]
    },
    {
        id: "small bottom-right popup",
        title: "Отримайте безкоштовну консультацію",
        subtitle: "",
        mailConfig: {
            to: "atlasiko",
            from: "atlasiko",
            subject: 'GudHub UA'
        },
        inputs: [
            {
                name: "email",
                type: "email",
                required: "true",
                placeholder: "E-mail *",
                errorText: "Введіть коректний E-mail",
                width: 12
            },
            {
                name: "phone",
                type: "phone",
                required: "false",
                placeholder: "Телефон",
                errorText: "Введіть коректний телефон",
                width: 12
            }
        ]
    }
];