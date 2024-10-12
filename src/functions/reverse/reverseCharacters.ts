import { checkTypeJs } from "../../utils";

export function reverseCharacters(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split("").reverse().join("");
    }

    return "";
}