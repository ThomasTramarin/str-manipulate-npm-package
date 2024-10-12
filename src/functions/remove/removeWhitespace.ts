import { checkTypeJs } from "../../utils";

export function removeWhitespace(str: string):string{
    checkTypeJs(str, "string");

    return str.replace(/\s+/g, "");
}

