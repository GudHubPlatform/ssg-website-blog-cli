// This file mission is to provide data that needs for your components while
// server rendering or on the user client side. You'll find them in  "window.getConfig()".

// json files must be exported like this: export {default as object_name} from 'relative_path' assert {type: 'json'};.


// imports of configs that are responsible for components content and must be filtered by language localization (property "langCode")
// example: "componentConfig" is array of objects that have "langCode" property

import { generalInfo } from './config/general-info.mjs';
import { formConfig } from './config/form-config.mjs';
import { menuConfig } from './config/menu-config.mjs';
import { blog_config } from './config/blog-config.mjs';

export const componentsConfigs = {
    generalInfo,
    menuConfig,
    formConfig,
    blog_config
};

export const multiLanguage = false;
export const defaultLanguage = 'uk';
export const languageList = [
    'uk'
];