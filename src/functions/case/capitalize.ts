import { checkTypeJs } from "../../utils";

export function toCapitalize(str: string): string{
    checkTypeJs(str, "string");

    if(str.length > 0){
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    return "";
}