const expect = require('chai').expect;

describe('inspired by JS interview questions', () => {
    it ('Reverse a string', () => {
        const input1 = " 123456A";
        const expected1 = "A654321 ";
        const input2 = "";
        const expected2 = "";

        const reverse = (s) => {
            return s.split("").reverse().join("");
        }

        expect(reverse(input1)).to.be.equal(expected1);
        expect(reverse(input2)).to.be.equal(expected2);
    });
})