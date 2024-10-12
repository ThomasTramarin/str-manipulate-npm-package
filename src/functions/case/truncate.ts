import { checkTypeJs } from "../../utils";

export function truncate(str: string, length: number, suffix: string = "..."): string{
    checkTypeJs(str, "string");
    checkTypeJs(length, "number");
    checkTypeJs(suffix, "string");

    if(length < 0){
        throw new RangeError("Length must be a non-negative number.");
    }

    if(str.length <= length){
        return str;
    }

    return str.slice(0, length) + suffix;
}