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
    it ('this parameters', () => {
        let car = {
            brand: 'Audi',
            maxSpeed: 180,
            speed: 0,
            /*drive(): function () {
                return (): void => {
                    this.speed = this.maxSpeed / 2;
                }
            }*/
        }
    });

    // the example is copypasted from 
    // https://www.typescriptlang.org/docs/handbook/functions.html
    it ('this parameter2', ()=> {
        interface Card {
            suit: string;
            card: number;
        }
        interface Deck {
            suits: string[];
            cards: number[];
            createCardPicker(this: Deck): () => Card;
        }
        let deck: Deck = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            // NOTE: The function now explicitly specifies that its callee must be of type Deck
            createCardPicker: function(this: Deck) {
                return () => {
                    let pickedCard = Math.floor(Math.random() * 52);
                    let pickedSuit = Math.floor(pickedCard / 13);
        
                    return {suit: this.suits[pickedSuit], card: pickedCard % 13};
                }
            }
        }

        let cp = deck.createCardPicker;
        
        //The 'this' context of type 'void' is not assignable to method's 'this' of type 'Deck'.ts(2684)
        //let card = cp();
        
        let cardPicker = deck.createCardPicker();
        let pickedCard = cardPicker();

        expect(typeof pickedCard.suit).to.be.equal("string");
    })
})