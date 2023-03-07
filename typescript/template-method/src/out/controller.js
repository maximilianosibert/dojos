"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const complex_business_logic_1 = require("./core/complex-business-logic");
const presentation_1 = require("./presentation/presentation");
const validators_1 = require("./validators/validators");
class Controller {
    entryPointEven(a, b) {
        const validator = new validators_1.Validators();
        validator.checkZeroParameter(a);
        validator.checkIsEvenParameter(a);
        const result = new complex_business_logic_1.CoreBussinesLokgic().multiply(a, b);
        return new presentation_1.Presentation().checkBigger100(result);
    }
    entryPointOdd(a, b) {
        const validator = new validators_1.Validators();
        validator.checkZeroParameter(a);
        validator.checkIsOddParameter(a);
        const result = new complex_business_logic_1.CoreBussinesLokgic().multiply(a, b);
        return new presentation_1.Presentation().checkBigger100(result);
    }
    entryPointDivision(a, b) {
        const validator = new validators_1.Validators();
        validator.checkZeroParameter(b);
        const result = new complex_business_logic_1.CoreBussinesLokgic().divide(a, b);
        return new presentation_1.Presentation().checkIsZero(result);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map