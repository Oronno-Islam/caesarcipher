document.getElementById('encryption-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let text = document.getElementById('plaintext').value;
    plainText = text.replace(/\s+/g, ''); 
    const shift = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(plainText, shift);

    document.getElementById('encrypted').textContent = `Encrypted Text: ${result}`;
});

function caesarCipher(plainText, shift) {
    return plainText.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let shiftedCode = code + shift;
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
