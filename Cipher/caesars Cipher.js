/**
 * Caesar's Cipher - also known as the ROT13 Cipher is when
 * a letter is replaced by the one that is 13 spaces away
 * from it in the alphabet. If the letter is in the first half
 * of the alphabet we add 13, if it's in the latter half we
 * subtract 13 from the character code value.
 */
function rot13(str) {
    let response = [];
    let strLength = str.length;

    for (let i = 0; i < strLength; i++) {
        const char = str.charCodeAt(i);

        if (char < 65 || (char > 90 && char < 97) || char > 122) {
            response.push(str.charAt(i));
        } else if ((char > 77 && char <= 90) || (char > 109 && char <= 122)) {
            response.push(String.fromCharCode(str.charCodeAt(i) - 13));
        } else {
            response.push(String.fromCharCode(str.charCodeAt(i) + 13));
        }

    }
    return response.join("");
}

const encryptedString = "Uryyb Jbeyq";
const decryptedString = rot13(encryptedString);
console.log(decryptedString); 
