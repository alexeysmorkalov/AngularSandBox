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

    it ('type assertion', () => {
        interface Car {
            Brand: string;
            [propName: string]: string;
        }

        let car : Car = {Brand: 'Lada', Color: 'red'};

        expect(car).to.have.property('Color');
    });

    it ('Excess Property Checks', () => {
        interface Car {
            Brand: string;
        }

        let car : Car = {Brand: 'Lada', Color: 'red'} as Car;

        expect(car).to.have.property('Color');
    });
});