import { checkTypeJs } from "../../utils";

const loremIpsumWords = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", 
    "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", 
    "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", 
    "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", 
    "ut", "aliquip", "ex", "ea", "commodo", "consequat", "duis", "aute", 
    "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", 
    "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", 
    "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", 
    "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", 
    "anim", "id", "est", "laborum"
];

export function generateLoremIpsum(wordCount: number = 10): string{
    checkTypeJs(wordCount, "number");
    if(wordCount <= 0){
        return "";
    }

    let result = '';

    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * loremIpsumWords.length);
        result += loremIpsumWords[randomIndex] + ' ';
    }

    result = result.trim() + ".";

    return result.charAt(0).toUpperCase() + result.slice(1);


}