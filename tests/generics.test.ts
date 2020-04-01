import {expect} from 'chai';

describe('generics', () => {
    it ('the most generic generic :)', () => {
        function MySelf<T>(arg: T): T {
            return arg;
        }

        const x = MySelf(1);
        expect(typeof x).to.be.equal('number');
    });

    it ('generic arrays1', () => {
        function CalcArray<T>(arg: T[]): number {
            return arg.length;
        }

        const res = CalcArray<number>([1,2]);

        expect(res).to.be.equal(2);
    });

    it ('generic arrays2', () => {
        function CalcArray<T>(arg: Array<T>): Array<T> {
            return arg.reverse();
        }

        const res = CalcArray<number>(Array<number>(1,2));

        expect(res.join(',')).to.be.equal('2,1');
    })
})