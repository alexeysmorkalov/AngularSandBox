import {expect} from 'chai';

describe('this in typescript', () => {
    it ('capturing this in arrow function', () => {
        class Car {
            speed: number;
            constructor() {
                this.speed = 0;
                this.drive = () => {this.speed = 1}
            }
            drive: () => void;
        }
        const car: Car = new Car();
        car.drive();
        expect(car.speed).to.be.equal(1);
    });

    it ('capturing this in arrow function', () => {
        class Car {
            #speed: number = 0;
            drive = () => {this.#speed = 1; return this;}
            get speed(): number {
                return this.#speed;
            }
        }

        let car: Car = new Car().drive();

        expect(car.speed).to.be.equal(1);

    });
})