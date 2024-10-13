import { checkTypeJs } from "../../utils";

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"; 
const numberChars = "0123456789";
const specialChars = "!@#$%^&*()"; 

const allChars = upperCaseChars + lowerCaseChars + numberChars + specialChars;

export function generateStrongPassword(length: number = 8): string {
    checkTypeJs(length, "number");
    if (length < 8) {
        throw new Error("Password should be at least 8 characters");
    }

    let passwordChars: string[] = [];

    passwordChars.push(getRandomChar(upperCaseChars));
    passwordChars.push(getRandomChar(lowerCaseChars));
    passwordChars.push(getRandomChar(numberChars));
    passwordChars.push(getRandomChar(specialChars));

    for (let i = passwordChars.length; i < length; i++) {
        passwordChars.push(getRandomChar(allChars));
    }

    return shuffleArray(passwordChars).join('');
}

function getRandomChar(charSet: string): string {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
}

function shuffleArray(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
}