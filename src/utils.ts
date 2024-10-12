export function checkTypeJs(value: any, typeName: string, array: boolean = false): void {
    if (array) {
        if (!Array.isArray(value)) {
            throw new TypeError(`Input must be an array of ${typeName}.`);
        }
        for (const item of value) {
            if (typeof item !== typeName) {
                throw new TypeError(`Each item in the array must be of type ${typeName}.`);
            }
        }
    } else {
        if (typeof value !== typeName) {
            throw new TypeError(`Input must be a ${typeName}.`);
        }
    }
}