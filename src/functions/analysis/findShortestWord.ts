import { checkTypeJs } from "../../utils";

export function findShortestWord(str: string): string {
    checkTypeJs(str, "string");

    const words = str.match(/\w+/g) || [];

    const shortestWord = words.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest
    })

    return shortestWord;
}