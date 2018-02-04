import compiler from './helpers/compiler';
import * as util from '../src/util';
import path from 'path';


describe('Loader', () => {
    test('Output json and string format of the ".yaml" file', async () => {
        const stats = await compiler('fixtures/config.yaml');
        const output = stats.toJson().modules[0].source;

        const expected = util.readFile(path.join(__dirname, 'fixtures/config.txt'))

        expect(output).toBe(expected);
    });
    
    test('Output json and string format as the same one above of the ".yml" file', async () => {
        const stats = await compiler('fixtures/config.yml');
        const output = stats.toJson().modules[0].source;

        const expected = util.readFile(path.join(__dirname, 'fixtures/config.txt'))

        expect(output).toBe(expected);
    });
    
    test('Output json and string format as the same one above of the ".yml" file', async () => {
        const stats = await compiler('fixtures/config.yml');
        const output = stats.toJson().modules[0].source;

        const expected = util.readFile(path.join(__dirname, 'fixtures/config.txt'))

        expect(output).toBe(expected);
    });
    
    test('Output json, text and url if used with "file-loader"', async () => {
        const stats = await compiler(
            'fixtures/config.yml',
            { file: { name: 'static/[name].[hash:8].[ext]' } },
            '/static',
            true
        );
        const output = stats.toJson().modules[0].source;

        const expected = util.readFile(path.join(__dirname, 'fixtures/config-w-fl-o-opts.txt'))
        
        expect(output).toBe(expected);
    });
    
    test('Output json and string format as the same one above of the ".yml" file', async () => {
        const stats = await compiler('fixtures/error.yml');
        const output = stats.toJson().modules[0].source;

//        const expected = util.readFile(path.join(__dirname, 'fixtures/config.txt'))

//        expect(output).toBe(expected);
    });
});
