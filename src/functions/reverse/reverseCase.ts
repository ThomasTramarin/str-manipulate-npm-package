import { checkTypeJs } from "../../utils";

export function reverseCase(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
    }

    return "";
}