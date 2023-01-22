var number;
var summation=0;
do {
    number = prompt("insert number (1,100) (0) to exit");
    if(number == null || number =='') continue;
    number = parseInt(number);
    if (number >100) break;
    if (Number.isInteger(number)){
        summation+=number;
    }
} while (number >0 && number <100 );
alert("Summation = "+summation);