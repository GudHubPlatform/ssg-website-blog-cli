import cliSpinners from 'cli-spinners';
import logUpdate from 'log-update';
import { projectInstall } from 'pkg-install';

export async function installPackages(targetDir) {
    const { frames, interval } = cliSpinners.aesthetic;
    let i = 0;

    const spinner = setInterval(() => {
        logUpdate(`Installing dependencies... ${frames[i = ++i % frames.length]}`);
    }, interval);

    await projectInstall({
        cwd: targetDir,
    });

    console.log('Dependencies installed successfully!');

    clearInterval(spinner);
}