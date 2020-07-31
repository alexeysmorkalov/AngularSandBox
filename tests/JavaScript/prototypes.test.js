const assert = require('assert');

describe('JS prototypes', () => {
    it ('a new function in prototype', () => {
        function Person(age) {
            this.age = age;
        }
        Person.prototype.getAge = function() {
            return this.age;
        }

        let age = 2;
        let p = new Person(age);

        assert.equal(age, p.getAge());
    });

    it ('.call function', () => {
        function Person(age) {
            this.age = age;
        }

        function Teacher(age) {
            Person.call(this, age);            
        } 

        let age = 2;
        let t = new Teacher(age);

        assert.equal(age, t.age);

    });
});