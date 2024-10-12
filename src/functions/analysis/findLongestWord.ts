import { checkTypeJs } from "../../utils";

export function findLongestWord(str: string): string {
    checkTypeJs(str, "string");

    const words = str.match(/\w+/g) || [];

    const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest
    })

    return longestWord;
}