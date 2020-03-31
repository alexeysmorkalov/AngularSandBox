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
})