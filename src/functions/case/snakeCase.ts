import { checkTypeJs } from "../../utils";

export function toSnakeCase(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.trim().replace(/\s+/g, "_").toLowerCase();
    }

    return "";
}