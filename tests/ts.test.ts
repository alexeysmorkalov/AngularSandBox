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

})