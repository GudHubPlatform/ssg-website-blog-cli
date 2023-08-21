import fsSync from 'fs';
const fs = fsSync.promises;

export async function updatePackage(targetDirectory, options) {
    const pckg = JSON.parse(await fs.readFile(targetDirectory + '/package.json'));
    pckg.name = options.name;
    await fs.writeFile(targetDirectory + '/package.json', JSON.stringify(pckg, null, 4));
}