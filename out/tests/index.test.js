"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Hello function', () => {
    it('should return hello world', () => {
        const result = 'Hello';
        chai_1.expect(result).to.equal('Helloq');
    });
});
