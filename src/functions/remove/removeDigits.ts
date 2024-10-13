import { checkTypeJs } from "../../utils";

export function removeDigits(str: string): string {
    checkTypeJs(str, "string");

    return str.replace(/[0-9]/g, "");
}