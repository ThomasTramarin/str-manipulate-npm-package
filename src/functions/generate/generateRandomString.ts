import { checkTypeJs } from "../../utils";

export function generateRandomString(length: number, characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"): string{
    checkTypeJs(length, "number");
    checkTypeJs(characters, "string");
    
    if(length <= 0 || characters.length <= 0){
        throw new Error("Length and characters must be greater than 0.");
    }

    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}