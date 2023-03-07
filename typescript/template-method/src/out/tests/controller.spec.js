"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const chai_1 = require("chai");
const controller_1 = require("../app/controller");
var chai = require('chai');
chai.use(chai_as_promised_1.default);
const expect = chai.expect;
/*------------------------------------------*/
(0, mocha_1.describe)('Controller Testing the entryPointEven', () => {
    it('should pass', () => {
        const even = new controller_1.Controller();
        chai_1.assert.equal(even.entryPointEven(2, 5), "Valid");
    });
});
(0, mocha_1.describe)('Controller Testing the entryPointEven failures', () => {
    let even;
    beforeEach(() => {
        even = new controller_1.Controller();
    });
    it('Zero number', () => {
        const even = new controller_1.Controller();
        expect(() => even.entryPointEven(0, 0)).to.throw(Error, "The number must be greater than 0");
    });
    it('Even number', () => {
        const even = new controller_1.Controller();
        expect(() => even.entryPointEven(3, 20)).to.throw(Error, "The number must be even");
    });
    it('Number too high', () => {
        const result = even.entryPointEven(10, 100);
        expect(result).to.equal("Invalid");
    });
});
(0, mocha_1.describe)('Testing the entryPointOdd', () => {
    it('should pass', () => {
        const odd = new controller_1.Controller();
        chai_1.assert.equal(odd.entryPointOdd(3, 5), "Valid");
    });
});
(0, mocha_1.describe)('Testing the entryPointOdd failures', () => {
    let odd;
    beforeEach(() => {
        odd = new controller_1.Controller();
    });
    it('Zero number', () => {
        const odd = new controller_1.Controller();
        expect(() => odd.entryPointOdd(0, 0)).to.throw(Error, "The number must be greater than 0");
    });
    it('Even number', () => {
        const odd = new controller_1.Controller();
        expect(() => odd.entryPointOdd(4, 20)).to.throw(Error, "The number must be odd");
    });
    it('Number too high', () => {
        const result = odd.entryPointOdd(13, 100);
        expect(result).to.equal("Invalid");
    });
});
(0, mocha_1.describe)('Testing the entryPointDivision', () => {
    it('should pass', () => {
        const odd = new controller_1.Controller();
        chai_1.assert.equal(odd.entryPointDivision(3, 5), "Valid");
    });
});
(0, mocha_1.describe)('Testing the entryPointDivision failures', () => {
    let odd;
    beforeEach(() => {
        odd = new controller_1.Controller();
    });
    it('Zero number', () => {
        const odd = new controller_1.Controller();
        expect(() => odd.entryPointDivision(0, 0)).to.throw(Error, "The number must be greater than 0");
    });
    it('Division by zero', () => {
        const result = odd.entryPointDivision(0, 100);
        expect(result).to.equal("Invalid");
    });
});
