import {expect} from 'chai';

describe('Typescript interfaces', () => {
    it('basic', ()=> {
        interface Car {
            Brand: string;
        }

        var c: Car = {Brand: 'Lada'}; 

        expect(c).to.have.property('Brand');
    });

    it ('optional property', () => {
        interface Car {
            Brand: string;
            Color?: string
        }

        var c: Car = {Brand: 'Lada'};

        expect(c).not.to.have.property('Color');
    });

    it ('readonly property', () => {
        interface Car {
            readonly Brand: string;
        }

        var c: Car = {Brand: 'Lada'};
        // not sure how to test
    });

    it ('readonly array', () => {
        const ra : ReadonlyArray<number> = [1, 2];
    });

    it ('excess property check', () => {
        interface Car {
            Brand: string;
            [propName: string]: string | boolean;

        }

        let car : Car = {Brand: 'Lada', Color: 'red', InStock: true};

        expect(car).to.have.property('Color');
    });

    it ('type assertion', () => {
        interface Car {
            Brand: string;
        }

        let car : Car = {Brand: 'Lada', Color: 'red'} as Car;

        expect(car).to.have.property('Color');
    });

    it ('function type', () => {
        interface Search {
            (arr : number[], value: number) : boolean;
        }

        let mySearch: Search = function(arr: number[], value: number): boolean {
            return arr.indexOf(value) >= 0;
        }

        const b = mySearch([1,2], 1);

        expect(b).to.be.true;
    });

    it ('indexible 1', () => {
        interface Car {
            [index: number]: string;
        }

        let car: Car = ['Lada', 'Niva'];

        expect(car[0]).to.be.equal('Lada');
    });

    it ('indexible 2', () => {
        interface Car {
            [index: string]: string;
        }

        let car: Car = {'k0': 'kk0', 'k1': 'kk1'};

        expect(car['k0']).to.be.equal('kk0');
    });
});