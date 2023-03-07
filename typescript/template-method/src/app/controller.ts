
export class Controller{

    entryPointEven(a: number, b: number): string  {

        if (a  === 0) {
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

    entryPointOdd(a: number, b: number): string  {

        if (a  === 0) {
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

    entryPointDivision(a: number, b: number): string  {

        if (b  === 0) {
            throw new Error("The number must be greater than 0");
        }

        const result = a / b;

        if (result === 0) {
            return "Invalid";
        }

        return "Valid";
    }
}