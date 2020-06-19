const { expect } = require('chai');

const exxpect = require('chai').expect;

describe('typeof', () => {
    it ('typeof null', () => {
        expect(typeof(null)).to.be.equal('object');
    });
    it ('typeof nothing', () => {
        let c;
        expect(typeof(c)).to.be.equal('undefined');
    });
    it ('typeof function', () => {
        const f = () => {};
        expect(typeof(f)).to.be.equal('function');
    });
    it ('typeof 1', () => {
        expect(typeof(1)).to.be.equal('number');
    });
    it ('typeof string', () => {
        expect(typeof('')).to.be.equal('string');
    });
    it ('typeof bool', () => {
        expect(typeof(0==0)).to.be.equal('boolean');
    });
    it ('typeof Array', () => {
        expect(typeof([])).to.be.equal('object');
    });
    it ('typeof NaN', () => {
        expect(typeof(NaN)).to.be.equal('number');
    });
    it ('typeof {}', () => {
        expect(typeof({})).to.be.equal('object');
    })
});