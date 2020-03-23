import {expect} from 'chai';

describe ('typescript classes', () => {
    it ('basic class', ()=> {
        class Car {
            color: string;
            constructor (color:string) {
                this.color = color;
            }
            canBeep() {
                return true;
            }
        }

        expect(new Car('green').canBeep()).to.be.true;
    });

    it ('inheritance', () => {
        class Vehicle {
            canBeep() {return true};
        }

        class Car extends Vehicle {
            numberOfWheels() {
                return 4;
            }
        };

        var c = new Car();
        expect(c.canBeep() && c.numberOfWheels() == 4).to.be.true;
    });

    it ('inheritance + super', () => {
        class Vehicle {
            brand: string;
            numberOfWheels: number;
            constructor(brand: string, numberOfWheels: number) {
                this.brand = brand;
                this.numberOfWheels = numberOfWheels;
            }
            getBrand(): string {
                return this.brand;
            }
            getNumberOfWheels(): number {
                return this.numberOfWheels;
            }

            setNumberOfWheels(value: number) : void {
                this.numberOfWheels = value; 
            }
        }

        class Bike extends Vehicle {
            constructor(brand : string) {
                super(brand, 2);
            }

            upgrade() : void {
                super.setNumberOfWheels(3);
            }
        }

        var b = new Bike('Harley');
        expect(b.getNumberOfWheels()).to.be.equal(2);
        // it's bad testing practice to make 2 assertions in a test bud 
        // for learning it's OK
        b.upgrade();
        expect(b.getNumberOfWheels()).to.be.equal(3);
    });
});

describe ('public, protected, private, readonly modifiers', () => {
    it ('ECMA private field', () => {
        class Car {
            readonly #brand: string;
            constructor(brand: string) {
                this.#brand = brand;
            } 

            setBrand(newBrand: string) : void {
                // Cannot assign to '#brand' because it is a read-only property.ts(2540)
                // this.#brand = '';
            } 
        }

        var car = new Car('Lada');
        // Property '#brand' is not accessible outside class 'Car' because it has a private identifier.ts(18013)
        // car.#brand
    });

    it ('private modifier', () => {
        class Car {
            private brand: string;
            constructor(brand: string) {
                this.brand = brand;
            } 

            private setBrand(value: string): void {
                this.brand = value;
            }

            getBrand(): string {
                return this.brand;
            }
        }

        let car : Car = new Car('Lada');
        // Property 'brand' is private and only accessible within class 'Car'.ts(2341)
        // let b = car.brand;

        //Property 'setBrand' is private and only accessible within class 'Car'.ts(2341)
        // car.setBrand('new');

        expect(car.getBrand()).to.be.not.null;

    });
});