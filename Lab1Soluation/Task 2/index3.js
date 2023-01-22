var numbersArr = [];
var summation = 0;
var multiplication = 1;
var dvision = 1;

for (var i = 0; i < 3; i++) {
    number = prompt("insert number" + (i + 1));
    if (number == null || number == '') continue;
    number = parseInt(number);
    if (Number.isInteger(number)) {
        numbersArr[i] = number
        summation += number;
        multiplication *= number;
        if (i == 0) dvision = number;
        else dvision /= number;
    }
}
for (var i = 0; i < 3; i++) {
    if (i == 0) {
        document.getElementById("Summation").innerText += numbersArr[i];
        document.getElementById("Multiplication").innerText += numbersArr[i];
        document.getElementById("Division").innerText += numbersArr[i];
    } else {
        document.getElementById("Summation").innerText += "+" + numbersArr[i];
        document.getElementById("Multiplication").innerText += "*" + numbersArr[i];
        document.getElementById("Division").innerText += "/" + numbersArr[i];
    }
}
document.getElementById("Summation").innerText += "=" + summation;
document.getElementById("Multiplication").innerText += "=" + multiplication;
document.getElementById("Division").innerText += "=" + dvision.toFixed(1); 
