import { checkTypeJs } from "../../utils";

export function toKebabCase(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.trim().replace(/\s+/g, "-").toLowerCase();
    }

    return "";
}