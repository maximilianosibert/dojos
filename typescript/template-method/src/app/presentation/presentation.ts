export class Presentation{

    checkBigger100(a: number): string {
        if (a > 100) {
            return "Invalid";
        }

        return "Valid";
    }

    checkIsZero(a: number): string {
        if (a === 0) {
            return "Invalid";
        }

        return "Valid";
    }

}
