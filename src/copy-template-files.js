import ncp from 'ncp';

import { promisify } from 'util';

const copy = promisify(ncp);

export function copyTemplateFiles(templatesDir, targetDir) {
    return copy(templatesDir, targetDir, { clobber: false });
}