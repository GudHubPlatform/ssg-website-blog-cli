import { promptOptions } from './prompt-options.js';
import { createProject } from './main.js';

export async function cli(args) {

    const advancedInstall = args.includes('--advanced');

    const options = await promptOptions(advancedInstall);

    await createProject(options);

}