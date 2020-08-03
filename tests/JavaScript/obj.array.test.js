const {expect} = require('chai');
const { given } = require('mocha-testdata');

describe('built-in Array object', () => {
    it('Array.length', () => {
        const array = ['1', '2'];
        expect(array.length).to.be.equal(2);
    });

    it ('Access array item using index position', () => {
        const array = [ 1, 2 ];
        expect(array[0]).to.be.equal(1);
        expect(array[1]).to.be.equal(2);
    });

    it ('array index out of position', () => {
        const array = [ 1, 2 ];
        expect(array[-1]).to.be.undefined;
        expect(array[3]).to.be.undefined;
    });

    it ('Array.from(string)', () => {
        const s = "abc";
        const array = Array.from(s);
        expect(array.length).to.be.equal(s.length);
        expect(array[0]).to.be.equal("a");
    });

    it ('Array.from(string, mapFn)', () => {
        const s = "abc";
        const array = Array.from(s, x => x.toUpperCase());
        expect(array[0]).to.be.equal("A");
    });

    var runs = [
        {data: null, expected: false},
        {data: "", expected: false},
        {data: "123", expected: false},
        {data: 8, expected: false},
        {data: true, expected: false},
        {data: [], expected: true}
    ];
    given(runs).it ('Array.isArray ', (run) => {
            expect(Array.isArray(run.data)).to.be.equal(run.expected);
        });
});
