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

        var mySearch: Search = function(arr: number[], value: number): boolean {
            return arr.indexOf(value) >= 0;
        }

        var b = mySearch([1,2], 1);

        expect(b).to.be.true;
    });
});