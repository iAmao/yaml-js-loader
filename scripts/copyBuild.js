const path = require('path');
const fs = require('fs-extra');


const files = {
    'README.md': '',
    'LICENSE': ''
};

Promise.all(
    Object.keys(files)
        .map((file) => copyFile(file, files[file]))
)
.then(() => createPackageFile());


function copyFile(file, filePath) {
    return new Promise((resolve) => {
        console.log(`copying ${file} to ${path.resolve(__dirname, '../lib', filePath)}`)
        return fs.copy(
            file,
            path.resolve(
                __dirname,
                '../lib',
                filePath,
                path.basename(file)
            ),
            (error, data) => {
                if (error) throw new Error (`error copying file ${file}`, error);
                return resolve(data);
            }
        );
    });
}


function createPackageFile() {
    return new Promise((resolve) => {
        fs.readFile(path.resolve(__dirname, '../package.json'), 'utf-8', (err, data) => {
            if (err) throw err;
            return resolve(data);
        });
    })
    .then((data) => JSON.parse(data))
    .then((packageData) => {
        const {
            author,
            version,
            description,
            keyword,
            repository,
            license,
            bugs,
            homepage,
            peerDependencies,
            dependencies
        } = packageData;
        const minPackage = {
            author,
            version,
            description,
            keyword,
            repository,
            license,
            bugs,
            homepage,
            peerDependencies,
            dependencies,
            main: './loader.js',
            name: 'yaml-js-loader',
        }
        return new Promise((resolve) => {
            const data = JSON.stringify(minPackage);
            fs.writeFile(path.resolve(__dirname, '../lib/package.json'), data, (error) => {
                if (error) throw error;
                return resolve();
            });
        });
    });
}

