import { checkTypeJs } from "../../utils";

export function consonantCount(str: string): number {
    checkTypeJs(str, "string");

    const consonants = new Set('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ');

    let consonantCount = 0;

    for(const char of str){
        if(consonants.has(char)){
            consonantCount++;
        }
    }

    return consonantCount;
}