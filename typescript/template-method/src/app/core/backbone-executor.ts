export interface CoreFunction{
    (a: number, b: number): number;
}

export interface PreconditionFunctions{
    ():void
}

export interface PresentationFunctions{
    (result:number):string
}

export class BackboneExecutor{
    
    constructor(
        private a:number,
        private b:number,
        private preconditions: PreconditionFunctions,
        private core:  CoreFunction,
        private presentation: PresentationFunctions
    ){}

    run():string{
        this.preconditions()
        const result = this.core(this.a, this.b);
        //console.log(`Result: ${result}`);
        return this.presentation(result);
    }
}