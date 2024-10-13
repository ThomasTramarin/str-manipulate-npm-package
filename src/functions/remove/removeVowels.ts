import { checkTypeJs } from "../../utils";

export function removeVowels(str: string): string {
    checkTypeJs(str, "string");

    return str.replace(/[aeiou]/gi, "");
}