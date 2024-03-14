import axios from 'axios';
import fsSync from 'fs';
import { generateConfig } from './generate-config.js';
import cliSpinners from 'cli-spinners';
import logUpdate from 'log-update';
const fs = fsSync.promises;

export async function installGudHubApps(user, targetDirectory) {
    let spinner
    try {

        const { frames, interval } = cliSpinners.aesthetic;
        let i = 0;

        spinner = setInterval(() => {
            logUpdate(`Installing GudHub Applications... ${frames[i = ++i % frames.length]}`);
        }, interval);

        const { data } = await axios.post('https://gudhub.com/api/services/app-install/express-install', {
            auth_key: user.auth_key,
            template_id: "27822.3851162",
            progress: false
        });
        
        const apps = {
            pages: data.apps.find(app => app.app_name.indexOf('Pages') > -1),
            blog: data.apps.find(app => app.app_name.indexOf('Blog') > -1),
            comments: data.apps.find(app => app.app_name.indexOf('Comments') > -1),
            api: data.apps.find(app => app.app_name.indexOf('API') > -1)
        }

        await fs.writeFile(targetDirectory + '/config.mjs', generateConfig(user.auth_key, apps));

        clearInterval(spinner);
        console.log('GudHub Applications installed successfully!');

        return true;

    } catch (error) {
        clearInterval(spinner);
        console.log(error);
        return false;
    }
}