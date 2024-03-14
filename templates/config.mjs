export { chapters } from './config/chapters.mjs';
export { routes } from './config/routes.mjs';
export { components_list } from './config/components-list.mjs';
export { blog_config } from './config/blog-config.mjs';

// PLACE CONSTANTS UNDER THIS LINE AND ADD COMMENT TO EXPLAIN WHAT YOUR CONSTANT DO
export const build_folder = 'dist'; // to server have path to build
export const auth_key = "YOUR-AUTH-KEY";
export const index_sitemap = true; // if false, server will not generate index sitemap

// ClientConfig
export * as clientConfig from './client-config.mjs';