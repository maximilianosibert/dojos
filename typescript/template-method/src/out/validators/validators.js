"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validators = void 0;
class Validators {
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
exports.Validators = Validators;
//# sourceMappingURL=validators.js.map