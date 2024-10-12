import { checkTypeJs } from "../../utils";

export function isPalindrome(str: string): boolean {
    checkTypeJs(str, "string");

    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    return cleanedStr === cleanedStr.split("").reverse().join("");
}