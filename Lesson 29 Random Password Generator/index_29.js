document.addEventListener("DOMContentLoaded", function() {
    function generatePassword(passwordLength, includeLowercase, includeUpperCase, includeNumbers, includeSymbols) {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+-=";

        let validChars = "";
        let password = "";

        if (includeLowercase) validChars += lowercaseChars;
        if (includeUpperCase) validChars += uppercaseChars;
        if (includeNumbers) validChars += numberChars;
        if (includeSymbols) validChars += symbolChars;

        if (passwordLength <= 0) {
            return "(Password length must be at least 1)";
        }
        if (validChars.length === 0) {
            return "(At least 1 set of characters needs to be selected)";
        }

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            password += validChars[randomIndex];
        }

        return password;
    }

    const lowerCase = document.getElementById("lowerCase");
    const upperCase = document.getElementById("upperCase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");
    const passwordLengthInput = document.getElementById("passwordLengthInput");

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const passwordLength = Number(passwordLengthInput.value);
        const includeLowercase = lowerCase.checked;
        const includeUpperCase = upperCase.checked;
        const includeNumbers = numbers.checked;
        const includeSymbols = symbols.checked;

        const password = generatePassword(passwordLength, includeLowercase, includeUpperCase, includeNumbers, includeSymbols);
        console.log(`Generated password: ${password}`);
        const output = document.getElementById("output");
        output.textContent =" ";
        output.innerHTML += `Your generated password is: <br> <br>${password}`;

    });
});