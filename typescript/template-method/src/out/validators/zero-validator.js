"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroValidator = void 0;
class ZeroValidator {
    checkZeroParameter(a) {
        if (a === 0) {
            throw new Error("The number must be greater than 0");
        }
    }
    checkIsEvenParameter(a) {
        if (a % 2 != 0) {
            throw new Error("The number must be even");
        }
    }
    checkIsOddParameter(a) {
        if (a % 2 === 0) {
            throw new Error("The number must be odd");
        }
    }
}
exports.ZeroValidator = ZeroValidator;
//# sourceMappingURL=zero-validator.js.map