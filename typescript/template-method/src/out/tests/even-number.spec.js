"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const chai_1 = require("chai");
const even_number_1 = require("../app/even-number");
var chai = require('chai');
chai.use(chai_as_promised_1.default);
const expect = chai.expect;
(0, mocha_1.describe)('Testing the Odd Number', () => {
    it('should pass', () => {
        const even = new even_number_1.EvenNumber();
        chai_1.assert.equal(even.checkNumber(2, 5), "Valid");
    });
});
(0, mocha_1.describe)('Testing the even Number failures', () => {
    let even;
    beforeEach(() => {
        even = new even_number_1.EvenNumber();
    });
    it('Zero number', () => {
        const even = new even_number_1.EvenNumber();
        expect(() => even.checkNumber(0, 0)).to.throw(Error, "The number must be greater than 0");
    });
    it('Even number', () => {
        const even = new even_number_1.EvenNumber();
        expect(() => even.checkNumber(3, 20)).to.throw(Error, "The number must be even");
    });
    it('Number too high', () => {
        const result = even.checkNumber(10, 100);
        expect(result).to.equal("Invalid");
    });
});
