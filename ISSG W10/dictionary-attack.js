const crypto = require("crypto");
const fs = require("fs");

// Target hash
const targetHash = "578ed5a4eecf5a15803abdc49f6152d6";

// Function to generate MD5 hash
function md5Hash(input) {
    return crypto.createHash("md5").update(input).digest("hex");
}

// Dictionary attack function
function dictionaryAttack(dictionaryFile) {
    const words = fs.readFileSync(dictionaryFile, "utf8").split("\n");

    for (const word of words) {
        const trimmedWord = word.trim(); // Remove any trailing whitespace
        const hash = md5Hash(trimmedWord);

        if (hash === targetHash) {
            return trimmedWord; // Found the password
        }
    }
    return null; // No match found
}

// Specify the dictionary file path
const dictionaryFile = "500-worst-passwords.txt"; // Ensure this file exists

// Run the dictionary attack
const foundPassword = dictionaryAttack(dictionaryFile);
if (foundPassword) {
    console.log(`Bob's password is: ${foundPassword}`);
} else {
    console.log("Password not found in the dictionary.");
}
