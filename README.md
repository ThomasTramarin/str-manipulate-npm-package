# str-manipulate

A package for string manipulation with useful functions.

## Description

`str-manipulate` is a package that provides various functions to manipulate strings easily and intuitively.

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

### Generate

#### **`generateRandomString(length: number, haracters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string`**

The `generateRandomString` function generates a random string of a specified length using the specified characters. By default, it uses uppercase letters, lowercase letters, and digits. This function is useful for creating unique identifiers, passwords, or any other string that requires randomness. If no custom characters are provided, it will use the default character set.