import { checkTypeJs } from "../../utils";

export function reverseEachWord(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
    }

    return "";
}