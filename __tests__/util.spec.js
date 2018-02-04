import path from 'path';
import * as util from '../src/util';


describe('util', () => {
    test('reads the content of a file', () => {
        const file = util.readFile(path.join(__dirname, 'fixtures/config.txt'));
        const expected = "module.exports = {\"url\":\"\",\"text\":\"name: Izuku Midoriya\\nquirk: One for all\\nfriends:\\n - Todoroki\\n - Lida\\n - Ochacho\\n - Bakugo\\n \",\"json\":{\"name\":\"Izuku Midoriya\",\"quirk\":\"One for all\",\"friends\":[\"Todoroki\",\"Lida\",\"Ochacho\",\"Bakugo\"]}}";
        
        expect(file).toEqual(expected);
    });
});
