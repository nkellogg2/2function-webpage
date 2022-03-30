// make a simple frontend for each prompt.
let ridBtn = document.getElementById('rid-button');
let vowelOutput = document.getElementById('fxn1-result');
const emptyStringMsg = "Enter a string! That's the whole dang point!";
function disemvowel(event) {
    event.preventDefault();
    let input = document.getElementById("vowel-input").value;
    console.log(input);

    if (input.length == 0) {
        vowelOutput.innerHTML = emptyStringMsg;
        console.log("Output: " + vowelOutput.innerHTML);
        return;
    }
    if (!/[aeiou]/.test(input.toLowerCase())) {
        console.log(input);
        vowelOutput.innerHTML = input;
        console.log("Output: " + vowelOutput.innerHTML);
        return;
    }

    let outputArr = input.split("");
    let output = outputArr.map(character => {
        if (/[aeiouAEIOU]/.test(character)) {
            character = "";
        }
        else {
            return character;
        }
    }).join("");
    vowelOutput.innerHTML = output;
    console.log("Output: " + vowelOutput.innerHTML);
}

function multiply(event) {
    event.preventDefault();
    let num1 = document.getElementById('num1-input').input;
    let num2 = document.getElementById('num2-input').input
}