const crypto = require("crypto");

// Target hash
const targetHash = "5531a5834816222280f20d1ef9e95f69";

// Function to generate MD5 hash
function md5Hash(input) {
    return crypto.createHash("md5").update(input).digest("hex");
}

// Brute-force function
function bruteForcePin() {
    for (let i = 0; i <= 9999; i++) {
        // Generate a 4-digit PIN, padded with zeros if necessary
        const pin = i.toString().padStart(4, "0");
        const hash = md5Hash(pin);

        // Check if the hash matches the target
        if (hash === targetHash) {
            return pin; // Found the PIN
        }
    }
    return null; // No match found
}

// Run the brute-force attack
const foundPin = bruteForcePin();
if (foundPin) {
    console.log(`Alice's PIN is: ${foundPin}`);
} else {
    console.log("PIN not found.");
}
