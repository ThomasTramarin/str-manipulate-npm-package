import { checkTypeJs } from "../../utils";

export function isStrongPassword(password: string){
    checkTypeJs(password, "string");

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{}|;:'",.<>?/~`]/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar
    );
}