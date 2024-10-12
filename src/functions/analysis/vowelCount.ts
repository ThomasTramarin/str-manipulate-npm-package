import { checkTypeJs } from "../../utils";

export function vowelCount(str: string): number {
    checkTypeJs(str, "string");

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let vowelCount = 0;

    for(const char of str){
        if(vowels.has(char)){
            vowelCount++;
        }
    }

    return vowelCount;
}