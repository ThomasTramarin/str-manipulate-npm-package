import { checkTypeJs } from "../utils";

export function reverseWords(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split(" ").reverse().join(" ");
    }

    return "";
}

export function reverseCharacters(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split("").reverse().join("");
    }

    return "";
}

export function reverseEachWord(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
    }

    return "";
}

export function reverseCase(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
    }

    return "";
}