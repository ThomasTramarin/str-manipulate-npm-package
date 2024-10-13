import { checkTypeJs } from "../../utils";

export function isHexColor(color: string): boolean {
    checkTypeJs(color, "string");
    
    const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return pattern.test(color);
}