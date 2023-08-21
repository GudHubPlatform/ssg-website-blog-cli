import path from 'path';
import { fileURLToPath } from 'url';

import { copyTemplateFiles } from './copy-template-files.js';
import { updatePackage } from './update-package.js';
import { installPackages } from './install-packages.js';
import { installGudHubApps } from './install-gudhub-apps.js';

export async function createProject(options) {
    const targetDirectory = process.cwd();
    const currentFileUrl = import.meta.url;
    const templatesDirectory = path.resolve(decodeURI(fileURLToPath(currentFileUrl)), '../../templates');

    await copyTemplateFiles(templatesDirectory, targetDirectory);

    await updatePackage(targetDirectory, options);

    if(options.gudhub_install === true) {
        await installGudHubApps(options.gudhub_user, targetDirectory);        
    }
    
    if(options.install === true) {
        await installPackages(targetDirectory);
    }
}