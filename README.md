# str-manipulate

A package for string manipulation with useful functions.

## Description

`str-manipulate` is a versatile package designed to make string manipulation easy and intuitive. Whether you need to reverse strings, convert case formats, generate random strings, validate emails, or analyze text, str-manipulate provides a comprehensive set of functions to meet your needs. Lightweight and easy to use, this package is ideal for any project that requires advanced string manipulation capabilities.

## Installation

You can install the package via npm:

```sh
npm install str-manipulate
```

## Functions

### Reverse

#### **`reverseWords(str: string): string`**

The `reverseWords` function takes a string as input, reverses the order of the words, and returns the modified string.

#### **`reverseCharacters(str: string): string`**

The `reverseCharacters` function takes a string as input, reverses the order of all characters in the string, and returns the modified string.

#### **`reverseEachWord(str: string): string`**

The `reverseEachWord` function takes a string as input, reverses the order of characters in each word, and returns the modified string.

#### **`reverseCase(str: string): string`**

The `reverseCase` function takes a string as input, inverts the case of each character, and returns the modified string.

### Case

#### **`toSnakeCase(str: string): string`**

The `toSnakeCase` function converts a string to snake_case format by replacing spaces with underscores and transforming all letters to lowercase.

#### **`toKebabCase(str: string): string`**

The `toKebabCase` function converts a string to kebab-case format by replacing spaces with hyphens and transforming all letters to lowercase.

#### **`toPascalCase(str: string): string`**

The `toPascalCase` function converts a string to PascalCase format by removing spaces and capitalizing the first letter of each word.


#### **`toCamelCase(str: string): string`**

The `toCamelCase` function converts a string to camelCase format by removing spaces and capitalizing the first letter of each word except the first one.

#### **`toCapitalize(str: string): string`**

The `tocapitalize` function converts the first letter of a string to uppercase and the rest of the string to lowercase.

#### **`truncate(str: string, length: number, suffix: string = "..."): string`**

The `truncate` function shortens a string to a specified length, appending a suffix if the original string exceeds that length. If the string is shorter than or equal to the specified length, it returns the original string.

### Remove

#### **`removeWhitespace(str: string): string`**

The `removeWhitespace` function remove all the whitespaces from a string

#### **`removeVowels(str: string): string`**

The `removeVowels` function removes all vowels (both uppercase and lowercase) from the input string.

#### **`removeConsonants(str: string): string`**

The `removeConsonants` function removes all consonants (both uppercase and lowercase) from the input string.

#### **`removeDigits(str: string): string`**

The `removeDigits` function removes all digits from the input string.

#### **`removePunctuation(str: string): string`**

The `removePunctuation` function removes all punctation marks from the input string.

### Generate

#### **`generateRandomString(length: number, haracters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string`**

The `generateRandomString` function generates a random string of a specified length using the specified characters. By default, it uses uppercase letters, lowercase letters, and digits. This function is useful for creating unique identifiers, passwords, or any other string that requires randomness. If no custom characters are provided, it will use the default character set.

#### **`generateHexColor(): string`**

The `generateHexColor` function generates a random hexadecimal color code in the standard format. It produces a string representing a color, which can be used for styling elements in web development or for creating random color palettes.

#### **`generateLoremIpsum(wordCount: number = 10): string`**

The `generateLoremIpsum` function generates a random "Lorem Ipsum" text consisting of a specified number of words. By default, it produces 10 words, making it useful for creating placeholder text in applications or web pages.

#### **`isPalindrome(length: number): string`**

The `generateStrongPassword` function generates a secure random password of the specified length, ensuring it includes at least one character from each of the following categories: uppercase letters, lowercase letters, numbers, and special characters. This function helps create strong passwords that are less predictable and more resistant to guessing attacks.

### Analysis

#### **`isPalindrome(str: string): boolean`**

The `isPalindrome` function checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

#### **`wordCount(str: string): number`**

The `wordCount` function counts the number of words in a given string. It ignores spaces and punctuation, treating consecutive sequences of alphanumeric characters as words.

#### **`vowelCount(str: string): number`**

The `vowelCount` function counts the number of vowels (a, e, i, o, u) in a given string, ignoring case.

#### **`consonantCount(str: string): number`**

The `consonantCount` function counts the number of consonants in a given string, ignoring case.

#### **`sentenceCount(str: string): number`**

The `sentenceCount` function counts the number of sentences in a given string based on sentence-ending punctuation (.!?).

#### **`findLongestWord(str: string): string`**

The `findLongestWord` function finds the longest word in a given string. A word is defined as a sequence of characters separated by spaces or punctuation.

#### **`findShortestWord(str: string): string`**

The `findShortestWord` function finds the shortest word in a given string. A word is defined as a sequence of characters separated by spaces or punctuation.

### Validation

#### **`isEmail(email: string): boolean`**

The `isEmail` function checks if the provided string is a valid email address. A valid email address consists of a local part, an '@' symbol, and a domain part, where the local part may contain alphanumeric characters, dots, and other special characters. The domain part must contain at least one dot and cannot start or end with a dot.

#### **`isURL(url: string): boolean`**

The `isURL` function checks if a given string is a valid URL. It verifies that the input string follows the structure of a valid URL, including the protocol (http or https), domain name, and optional components like port, path, query string, and fragment.

#### **`isHexColor(color: string): boolean`**

The `isHexColor` function checks if a given string is a valid hexadecimal color code. It verifies that the input string follows the format of a hex color code, which includes a hash (#) followed by either three or six hexadecimal digits.

#### **`isStrongPassword(color: string): boolean`**

The `isStrongPassword` function checks whether a given password meets the criteria for strength. A strong password should contain a mix of uppercase letters, lowercase letters, numbers, and special characters, along with a minimum length.