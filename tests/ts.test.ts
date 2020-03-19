import { expect } from 'chai';

describe('TypeScript types', () => {
    let t : boolean = true;
    let f : boolean = false;
    it('Boolean, true', () => {
        expect(true).to.be.true;
    });

    it('Boolean, false', () => {
        expect(false).to.eq(f);
    });

    it ('Number decumal', () => {
        let n : number = 10;
        expect(n).to.be.greaterThan(n-1);
    });

    it ('string template', () => {
        let n : number = 1;
        let s : string = `${ n + 1 }`;
        expect(s).to.be.equal(`2`); 
    });

    it ('array declaration generic', () => {
        let arr: Array<number> = [1, 2, 3];
        expect(arr.length).to.be.equal(3);
    });

    it ('array declaration decl', () => {
        let arr: number[] = [1, 2, 3];
        expect(arr.length).to.be.equal(3);
    });

    it ('touple', () => {
        let v1: [number, string];
        let v2: [number, string];
        v1 = [1, '1'];
        v2 = v1;
        expect(v1).to.be.equal(v2);
    });

    it ('touple', () => {
        let v1: [number, string, number];
        let v2: [number, string, number];
        v1 = [1, '1', 1];
        v2 = v1;
        expect(v1).to.be.equal(v2);
    });

})