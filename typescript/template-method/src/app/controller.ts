
import { CoreBussinesLokgic as CoreBussinesLogic } from "./core/complex-business-logic";
import { Presentation } from "./presentation/presentation";
import { Validators } from "./validators/validators";

export class Controller{

    entryPointEven(a: number, b: number): string  {

        const validator = new Validators();
        validator.checkZeroParameter(a);

        validator.checkIsEvenParameter(a);

        const result = new CoreBussinesLogic().multiply(a,b)

        return new Presentation().checkBigger100(result)
    }    

    entryPointOdd(a: number, b: number): string  {

        const validator = new Validators();
        validator.checkZeroParameter(a);

        validator.checkIsOddParameter(a);

        const result = new CoreBussinesLogic().multiply(a,b)

        return new Presentation().checkBigger100(result)
    }

    entryPointDivision(a: number, b: number): string  {

        const validator = new Validators();
        validator.checkZeroParameter(b);

        const result = new CoreBussinesLogic().divide(a,b)

        return new Presentation().checkIsZero(result);
    }

    

    
    
}