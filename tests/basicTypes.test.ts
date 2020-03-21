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

    it ('touple 1', () => {
        let v1: [number, string];
        let v2: [number, string];
        v1 = [1, '1'];
        v2 = v1;
        expect(v1).to.be.equal(v2);
    });

    it ('touple 2', () => {
        let v1: [number, string, number];
        let v2: [number, string, number];
        v1 = [1, '1', 1];
        v2 = v1;
        expect(v1).to.be.equal(v2);
    });

    it ('touple get', () => {
        let v1: [number, string, number] = [1, '1', 1];
        expect(v1[0]).to.be.equal(v1[2]);
    });

    it ('touple set', () => {
        let v1: [number, string, number] = [1, '1', 1];
        let n = 'n';
        v1[1] = n;
        expect(v1[1]).to.be.equal(n);
    });

    it ('enum basic', () => {
        enum Alignment {Left, Center, Right};
        let align : Alignment = Alignment.Left;
        expect(align.valueOf()).to.be.equal(0);
    });
    
    // By annotating an enum option, you set the value;
    it ('enum annotating 0', () => {
        enum Alignment {Left = 1, Center, Right};
        let align : Alignment = Alignment.Left;
        expect(align.valueOf()).to.be.equal(1);
    });

    // increments continue from annotated value:
    it ('enum index 1', () => {
        enum Alignment {Left, Center = 3, Right};
        const align = Alignment.Left;
        expect(Alignment.Left).to.be.equal(0);
        expect(Alignment.Right).to.be.equal(4);
    });    
    
    it ('enum num string', () => {
        enum Alignment {Left, Center, Right = 4};
        let alignString : string = Alignment[0];
        let alignNumber : number = Alignment.Left.valueOf();
        expect(alignString).to.be.equal('Left');
        expect(alignNumber).to.be.equal(0);
    });

    // Const enum reduces the number of objects in JavaScript runtime
    it ('const enum', () => {
        const enum Alignment {Left, Center, Right};
        const align = Alignment.Center;
        expect(align).to.be.lessThan(Alignment.Right);
    });

    it ('any', () => {
        let s : any = 0;
        expect(s).to.be.not.string;
        s = true;
        expect(s).to.be.true;
    });

    it ('null & undefined', () => {
        let a: any = 1;
        a = null;
        expect(a).to.be.null;
        expect(a).not.to.be.undefined;
        a = undefined;
        expect(a).to.be.undefined;
        expect(a).not.to.be.null;
    });

    it ('union type', () => {
        let a: string | null = '1';
        a = null;
        expect(a).to.be.null;
        expect(a).not.to.be.undefined;
        a = '1';
        expect(a).to.be.string;
        expect(a).not.to.be.null;
    });

    it ('object type', () => {
        let o: object | null = null;
        o = { Name: 'object' };
        expect(o).to.be.not.null;
    });
    
    it ('never', () => {
        function n () : never {
            throw new Error('Err');
        }

        expect(()=>n()).throws('Err');
    });

    it ('type assertions', () => {
        const enum Day {Sunday, Monday};
        const s: any = Day.Monday;
        expect((s as Day).valueOf()).to.be.equal(1); // for JSX
        expect((<Day>s).valueOf()).to.be.equal(1);
    });

    //BigInt literals are not available when targeting lower than ES2020.ts(2737)
    /*it ('bigint', () => {
        let n: bigint = 100n;
        expect(n).to.be.equal(100n - 1n);
    });*/
    
})