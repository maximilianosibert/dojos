"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    entryPointEven(a, b) {
        if (a === 0) {
            throw new Error("The number must be greater than 0");
        }
        if (a % 2 != 0) {
            throw new Error("The number must be even");
        }
        const result = a * b;
        if (result > 100) {
            return "Invalid";
        }
        return "Valid";
    }
    entryPointOdd(a, b) {
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
    entryPointDivision(a, b) {
        if (b === 0) {
            throw new Error("The number must be greater than 0");
        }
        const result = a / b;
        if (result === 0) {
            return "Invalid";
        }
        return "Valid";
    }
}
exports.Controller = Controller;
