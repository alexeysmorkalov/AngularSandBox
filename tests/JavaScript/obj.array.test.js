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

    it ('Array.of()', () => {
        const arr = Array.of(undefined, 1, 2, "3");
        expect(arr.length).to.be.equal(4);
        expect(arr[0]).to.be.equal(undefined);
        expect(arr[1]).to.be.equal(1);
        expect(arr[2]).to.be.equal(2);
        expect(arr[3]).to.be.equal("3");
    });

    it ('Array.concat()', () => {
        const arr1 = Array.of(1, 2, 3);
        const arr2 = Array.of(4, 5);
        const arr3 = arr1.concat(arr2);
        expect(arr3.length).to.be.equal(arr1.length + arr2.length);
        expect(arr3[0]).to.be.equal(arr1[0]);
        expect(arr3[arr1.length]).to.be.equal(arr2[0]);
    });
});
