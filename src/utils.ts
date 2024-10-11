export function checkTypeJs(value: any, typeName: string){
    if (typeof value !== typeName) {
        throw new TypeError("Input must be a " + typeName + ".");
    }
}