import { checkTypeJs } from "../../utils";

export function sentenceCount(str: string): number {
    checkTypeJs(str, "string");

    const sentenceEndings = /[.!?]+/;

    const sentences = str.split(sentenceEndings).filter(sentence => sentence.trim() !== "");

    return sentences.length;
}