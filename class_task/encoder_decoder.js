/**
 * Encodes the input string using a simple substitution cipher.
 * Each letter in the input string is replaced with its reverse alphabet counterpart.
 * Non-alphabetic characters remain unchanged.
 *
 * @param {string} inputString - The string to be encoded.
 * @returns {string} The encoded string.
 */
function encoderFunc(inputString) {
    arrayOne = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    arrayTwo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let letterIndex;
    let pickArray;
    let newWord = "";
    for (let letter of inputString) {
        if (!arrayOne.includes(letter) & !arrayTwo.includes(letter)) {
            newWord += letter;
            continue;
        } else if (arrayOne.includes(letter)) {
            pickArray = arrayOne;
        } else {
            pickArray = arrayTwo;
        }
        letterIndex = pickArray.indexOf(letter);
        newWord += pickArray[pickArray.length - (letterIndex + 1)];
    }
    return newWord;
}

/**
 * Decodes the input string that was encoded using the encoderFunc function.
 * Reverses the substitution cipher to retrieve the original string.
 *
 * @param {string} encodedString - The encoded string to be decoded.
 * @returns {string} The decoded string.
 */
function decoderFunc(inputString) {
    let arrayOne = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let arrayTwo = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    arrayOne = arrayOne.slice().reverse();
    arrayTwo = arrayTwo.slice().reverse();

    let letterIndex;
    let pickArray;
    let newWord = "";
    for (let letter of inputString) {
        if (!arrayOne.includes(letter) & !arrayTwo.includes(letter)) {
            newWord += letter;
            continue;
        } else if (arrayOne.includes(letter)) {
            pickArray = arrayOne;
        } else {
            pickArray = arrayTwo;
        }
        letterIndex = pickArray.indexOf(letter);
        newWord += pickArray[pickArray.length - (letterIndex + 1)];
    }
    return newWord;
}
const encodedText = encoderFunc("Hello! CJay, how are you doing?");
console.log(encodedText);
console.log(decoderFunc(encodedText));
