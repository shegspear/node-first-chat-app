var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var latitude = '9.11010101';
        var longitude = '10.8987373';

        var res = generateLocationMessage(from, latitude, longitude);
        expect(res.from).toBe(from);
        expect(res.createdAt).toBeGreaterThan(0);
        expect(res.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    });
});