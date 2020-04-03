import {expect} from 'chai';

describe('generics intro', () => {
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
    });
});

describe('generics types', () => {

    function Calc<T>(arg: T): T {
        return arg;
    }

    it ('generic type1', () => {

        let calc: <T>(arg: T) => T = Calc;

        const res = calc("1");

        expect(res).to.be.equal("1");
    });

    it ('generic type2', () => {
        let calc: <U>(arg: U) => U = Calc;

        const res = calc(1);

        expect(res).to.be.equal(1);
    });

    it ('generic type3', () => {
        let calc : {<T>(arg: T): T } = Calc;

        const res = calc(null);

        expect(res).to.be.null;
    });

    it ('generic interface', () => {
        interface CalcEngine {
            <T>(arg: T): T;
        }

        let calc: CalcEngine = Calc;

        const res = calc(0);

        expect(res).to.be.equal(0);
    });

    it ('generic interface2', () => {
        interface CalcEngine<T> {
            (arg: T): T;
        }

        let calc: CalcEngine<number> = Calc;

        const res = 2;

        expect(res).to.be.equal(2);
    });
});