import { checkTypeJs } from "../../utils";

export function wordCount(str: string): number {
    checkTypeJs(str, "string");

    if (!str.trim()) {
        return 0;
    }

    const sanitizedStr = str.replace(/[^A-Za-z0-9\s'’-]/g, '').trim();

    const words = sanitizedStr.split(/\s+/).filter(Boolean);
    return words.length;
}