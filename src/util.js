import fs from 'fs';

export const readFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8');
}
