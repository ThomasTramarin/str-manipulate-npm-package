import { checkTypeJs } from "../../utils";

export function toPascalCase(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
    }

    return "";
}