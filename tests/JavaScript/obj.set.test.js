const {expect} = require('chai');

describe ('Set object', () => {
    const flags = new Set();
    flags.add('1');
    flags.add(2);
    flags.add(null);
    flags.add(undefined);

    it ('Set.has()', () => {
        expect(flags.has('1')).to.be.true;
    });

    it ('Set.has(diffType)', () => {
        expect(flags.has(1)).to.be.false;
    });

    it ('Set.has(null)', () => {
        expect(flags.has(null)).to.be.true;
    });

    it ('Set.has(undefined)', () => {
        expect(flags.has(undefined)).to.be.true;
    });

    it ('typeof Set', () => {
        expect(typeof Set).to.be.equal('function');
    })
})