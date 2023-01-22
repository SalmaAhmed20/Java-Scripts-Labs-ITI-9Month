var InsertedTxt;
do {
    InsertedTxt = prompt("insert a mesage");
} while (InsertedTxt == null || InsertedTxt == '');
console.log(InsertedTxt);
for (var i = 1; i <= 6; i++) {
    document.getElementById("id"+i).innerText=InsertedTxt 
}