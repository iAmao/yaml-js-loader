import JsYaml from 'js-yaml';
import * as util from './util';

export default function (source) {
    this.cacheable && this.cacheable();
    
    try {
        const yamlStr = util.readFile(this.resourcePath).toString();
        const yamlJSON = JsYaml.safeLoad(yamlStr);
        let yamlURL = '';

        if (this.loaders.length > 1) {
            const parentLoader = this.loaders[this.loaderIndex + 1];
            if (parentLoader && parentLoader.path.split('/').indexOf('file-loader') >= 0) {
                yamlURL = `/${source.split('"')[1]}`;
            }
        }

        return 'module.exports = ' + JSON.stringify({
            url: yamlURL,
            text: yamlStr,
            json: yamlJSON
        });
    } catch(error) {
        throw new Error(error);
    }
}
