var expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('shoult generate correct message object', () => {
        var name = 'Segun';
        var message = 'PLease work';

        var res = generateMessage(name, message);
        expect(res.from).toBe(name);
        expect(res.text).toBe(message);
        expect(res.createdAt).toBeGreaterThan(0);
    });
});