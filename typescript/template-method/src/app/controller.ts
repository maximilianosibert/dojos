export class Controller{

    entryPointEven(a: number, b: number): string  {

        this.checkZeroParameter(a);

        this.checkIsEvenParameter(a);

        const result = a * b;

        return this.checkBigger100(result)
    }    

    entryPointOdd(a: number, b: number): string  {

        this.checkZeroParameter(a);

        this.checkIsOddParameter(a);

        const result = a * b;

        return this.checkBigger100(result)
    }

    entryPointDivision(a: number, b: number): string  {

        this.checkZeroParameter(b);

        const result = a / b;

        return this.checkIsZero(result);
    }

    private checkZeroParameter(a: number) {
        if (a === 0) {
            throw new Error("The number must be greater than 0");
        }
    }

    private checkBigger100(a: number): string {
        if (a > 100) {
            return "Invalid";
        }

        return "Valid";
    }

    private checkIsZero(a: number): string {
        if (a === 0) {
            return "Invalid";
        }

        return "Valid";
    }

    private checkIsEvenParameter(a: number) {
        if (a % 2 != 0) {
            throw new Error("The number must be even");
        }
    }

    private checkIsOddParameter(a: number) {
        if (a % 2 === 0) {
            throw new Error("The number must be odd");
        }
    }
}