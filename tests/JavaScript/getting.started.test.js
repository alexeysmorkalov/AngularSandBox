const assert = require('assert');
describe('Getting Started with JS unit tests', () => {
    it (' 2 * 2 = 4', () => {
        const a = 2 * 2;
        const b = 4;
        assert.equal(a, b);
    });
});