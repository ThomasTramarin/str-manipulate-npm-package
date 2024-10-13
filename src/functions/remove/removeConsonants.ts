import { checkTypeJs } from "../../utils";

export function removeConsonants(str: string): string {
    checkTypeJs(str, "string");

    return str.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "");
}