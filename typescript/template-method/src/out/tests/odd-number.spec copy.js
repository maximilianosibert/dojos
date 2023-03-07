"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const chai_1 = require("chai");
const odd_number_1 = require("../app/odd-number");
var chai = require('chai');
chai.use(chai_as_promised_1.default);
const expect = chai.expect;
(0, mocha_1.describe)('Testing the Odd Number', () => {
    it('should pass', () => {
        const odd = new odd_number_1.OddNumber();
        chai_1.assert.equal(odd.checkNumber(3, 5), "Valid");
    });
});
(0, mocha_1.describe)('Testing the Odd Number failures', () => {
    let odd;
    beforeEach(() => {
        odd = new odd_number_1.OddNumber();
    });
    it('Zero number', () => {
        const odd = new odd_number_1.OddNumber();
        expect(() => odd.checkNumber(0, 0)).to.throw(Error, "The number must be greater than 0");
    });
    it('Even number', () => {
        const odd = new odd_number_1.OddNumber();
        expect(() => odd.checkNumber(4, 20)).to.throw(Error, "The number must be odd");
    });
    it('Number too high', () => {
        const result = odd.checkNumber(13, 100);
        expect(result).to.equal("Invalid");
    });
});
