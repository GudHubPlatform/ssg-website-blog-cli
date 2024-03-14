import { components_list as GudhubComponents } from '@gudhub/ssg-web-components-library';
export const components_list = [
    ...GudhubComponents,
    {
        tag: 'footer-component',
        src: '/src/assets/js/components/footer/footer.js',
    },
    {
        tag: 'header-component',
        src: '/src/assets/js/components/header/header.js',
    }
];