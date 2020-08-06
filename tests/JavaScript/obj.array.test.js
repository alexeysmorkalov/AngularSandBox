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

    it ('Array.concat(array)', () => {
        const arr1 = Array.of(1, 2, 3);
        const arr2 = Array.of(4, 5);
        const arr3 = arr1.concat(arr2);
        expect(arr3.length).to.be.equal(arr1.length + arr2.length);
        expect(arr3[0]).to.be.equal(arr1[0]);
        expect(arr3[arr1.length]).to.be.equal(arr2[0]);
    });

    it ('Array.concat(number)', () => {
        const arr1 = Array.of(1, 2, 3);
        const arr2 = 4;
        const arr3 = arr1.concat(arr2);
        expect(arr3.length).to.be.equal(arr1.length + 1);
        expect(arr3[0]).to.be.equal(arr1[0]);
        expect(arr3[arr1.length]).to.be.equal(arr2);
        // result was a new array
        expect(arr1).not.to.be.equal(arr3);
        expect(arr2).not.to.be.equal(arr3);
    });

    //The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
    it ('Array.copyWithin()', () => {
        let arr0 = [1, 2, 3];
        let arr = arr0.copyWithin(-1);
        expect(arr).to.be.eql([1, 2, 1]);
        
        // result was the same array
        expect(arr).to.be.equal(arr0);
    });

    it ('Array.entries()', () => {
        const iterator = ["a","b"].entries();
        const [index1, element1] = iterator.next().value;
        const [index2, element2] = iterator.next().value;
        expect(index1).to.be.equal(0);
        expect(index2).to.be.equal(1);
        expect(element1).to.be.equal("a");
        expect(element2).to.be.equal("b");
    });

    it ('Array.every()', () => {
        const arr = Array.from("abcde");
        let res = arr.every(x => typeof x === "string");
        expect(res).to.be.true;
    });

    // The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). 
    // It returns the modified array.
    it ('Array.fill()', () => {
        let array1 = [1, 2, 3, 4];
        let array2 = array1.fill(0, 0);

        expect(array2.every(x => x === 0)).to.be.true;
        // result was the same array
        expect(array1).to.be.equal(array2);

    });
});
