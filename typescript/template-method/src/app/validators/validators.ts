
export class Validators{

    checkZeroParameter(a: number) {
        if (a === 0) {
            throw new Error("The number must be greater than 0");
        }
    }

    checkIsEvenParameter(a: number) {
        if (a % 2 != 0) {
            throw new Error("The number must be even");
        }
    }

    checkIsOddParameter(a: number) {
        if (a % 2 === 0) {
            throw new Error("The number must be odd");
        }
    }
    
}