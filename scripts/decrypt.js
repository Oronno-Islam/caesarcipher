document.getElementById('decryption-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let text = document.getElementById('plaintext').value;
    plainText = text.replace(/\s+/g, ''); // Remove spaces from the text
    const results = decryptCaesarCipherNoKey(plainText);

    const resultContainer = document.getElementById('decrypted');
    resultContainer.innerHTML = ''; // Clear previous results
    results.forEach((result, index) => {
        const p = document.createElement('p');
        p.textContent = `Shift ${index + 1}: ${result}`;
        resultContainer.appendChild(p);
    });
});
function decryptCaesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let shiftedCode = code - shift;

            if (char >= 'A' && char <= 'Z') {
                if (shiftedCode > 'Z'.charCodeAt(0)) {
                    shiftedCode -= 26;
                } else if (shiftedCode < 'A'.charCodeAt(0)) {
                    shiftedCode += 26;
                }
            } else if (char >= 'a' && char <= 'z') {
                if (shiftedCode > 'z'.charCodeAt(0)) {
                    shiftedCode -= 26;
                } else if (shiftedCode < 'a'.charCodeAt(0)) {
                    shiftedCode += 26;
                }
            }

            return String.fromCharCode(shiftedCode);
        }

        return char;
    }).join('');
}

function decryptCaesarCipherNoKey(text) {
    const results = [];
    for (let shift = 1; shift < 26; shift++) {
        const decryptedText = decryptCaesarCipher(text, shift);
        results.push(decryptedText);
    }
    return results;
}