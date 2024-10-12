import { checkTypeJs } from "../../utils";

export function reverseWords(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split(" ").reverse().join(" ");
    }

    return "";
}