"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
describe('TypeScript types', function () {
    var t = true;
    var f = false;
    it('Boolean, true', function () {
        chai_1.expect(true).to.be["true"];
    });
    it('Boolean, false', function () {
        chai_1.expect(false).to.eq(f);
    });
    it('Number decumal', function () {
        var n = 10;
        chai_1.expect(n).to.be.greaterThan(n - 1);
    });
    it('string template', function () {
        var n = 1;
        var s = "" + (n + 1);
        chai_1.expect(s).to.be.equal("2");
    });
    it('array declaration generic', function () {
        var arr = [1, 2, 3];
        chai_1.expect(arr.length).to.be.equal(3);
    });
    it('array declaration decl', function () {
        var arr = [1, 2, 3];
        chai_1.expect(arr.length).to.be.equal(3);
    });
});
