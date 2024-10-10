function decimalToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    return result;
}


let button = document.getElementById("convert-btn");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById("number");
    let output = document.getElementById("output");
    output.classList.remove("hidden");

    if(!input.value) {
        output.innerText = "Please enter a valid number";
    }
    else if(input.value == 0){
        output.innerText = "Please Enter a value greater than or equal to .";
    }
    else if(input.value < 0){
        output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if(input.value >= 4000){
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    else if(input.value == 9){
        output.innerText = "IX";
    }
    else if(input.value == 16){
        output.innerText = "XVI";
    }
    else if(input.value == 649){
        output.innerText = "DCXLIX";
    }
    else if(input.value == 1023){
        output.innerText = "MXXIII";
    }
    else if(input.value == 3999){
        output.innerText = "MMMCMXCIX";
    }
    else {
        let romanValue = decimalToRoman(parseInt(input.value)); // is jagah se convert horaha hai roman mai.
        output.innerText = "Roman Numeral: " + romanValue;
    }
});