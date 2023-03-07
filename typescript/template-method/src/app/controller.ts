
import { BackboneExecutor } from "./core/backbone-executor";
import { CoreBussinesLokgic as CoreBussinesLogic } from "./core/complex-business-logic";
import { Presentation } from "./presentation/presentation";
import { Validators } from "./validators/validators";

export class Controller{

    entryPointEven(a: number, b: number): string  {

        const executor = new BackboneExecutor(
            a,b, 
            EvenValidations,
            new CoreBussinesLogic().multiply,
            presentation);
        const result: string = executor.run();

        return result
        
        function presentation(entry:number): string {
            return new Presentation().checkBigger100(entry);
        }

        function EvenValidations() {
            const validator = new Validators();
            validator.checkZeroParameter(a);
            validator.checkIsEvenParameter(a);
            return validator;
        }
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