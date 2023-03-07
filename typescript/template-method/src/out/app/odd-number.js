"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OddNumber = void 0;
class OddNumber {
    checkNumber(a, b) {
        if (a === 0) {
            throw new Error("The number must be greater than 0");
        }
        if (a % 2 === 0) {
            throw new Error("The number must be odd");
        }
        const result = a * b;
        if (result > 100) {
            return "Invalid";
        }
        return "Valid";
    }
}
exports.OddNumber = OddNumber;
