import { checkTypeJs } from "../../utils";

export function removePunctuation(str: string): string {
    checkTypeJs(str, "string");

    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}