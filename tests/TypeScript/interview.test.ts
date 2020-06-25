import {expect} from 'chai';

describe('interview questions', () => {
    it ('reverse a string', () => {
        let s: string = ' 123';
        let expected: string = '321 ';
        let reverse: (input: string) => string = function (input: string): string {
            return input.split('').reverse().join('');
        }

        expect(reverse(s)).to.be.equal(expected);
    })
})