function disemvowel(string) {
    if (string.length == 0) {
        throw "Empty string";
    }
    if (!/[aeiou]/.test(string.toLowerCase())) {
        return string;
    }

    let outputArr = string.split("");
    return output = outputArr.map(character => {
        if (/[aeiouAEIOU]/.test(character)) {
            character = "";
        }
        else {
            return character;
        }
    }).join("");
}

function multiply(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        throw "Invalid type";
    }
}