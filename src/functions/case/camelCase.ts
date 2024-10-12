import { checkTypeJs } from "../../utils";

export function toCamelCase(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        const words = str.trim().split(/\s+/);
        return words[0].toLowerCase() +
            words.slice(1)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join("");
    }

    return "";
}