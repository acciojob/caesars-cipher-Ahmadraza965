// index.js
function rot13(encodedString) {
  // Create a helper function to shift a single character by 13 places
  function shiftChar(char) {
    // Convert the character to its ASCII code
    const charCode = char.charCodeAt(0);

    // Check if the character is a capital letter (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      // Apply the ROT13 shift by adding 13 to the character's code
      let shiftedCharCode = charCode + 13;

      // If the shifted code goes beyond 'Z', wrap around to the beginning of the alphabet
      if (shiftedCharCode > 90) {
        shiftedCharCode = shiftedCharCode - 26;
      }

      // Convert the shifted code back to a character
      return String.fromCharCode(shiftedCharCode);
    }

    // Return non-alphabetic characters unchanged
    return char;
  }

  // Split the encoded string into an array of characters
  const encodedChars = encodedString.split('');

  // Apply the shift to each character using the helper function
  const decodedChars = encodedChars.map(shiftChar);

  // Join the decoded characters back into a string
  const decodedString = decodedChars.join('');

  // Return the decoded string
  return decodedString;
}

// Example usage
const encoded = 'EBG13 rknzcyr.';
const decoded = rot13(encoded);
console.log(decoded);
