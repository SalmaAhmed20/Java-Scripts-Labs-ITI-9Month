//Take Size
do {
    var Size = prompt("Enter Size of Array");
} while (Size == null || Size == '')
if (isNaN(Number(Size))) {
    alert("Size must be numeric"); //continue;
}
Size = Number(Size);
//Store Elements
var arr = [];
for (var i = 0; i < Size; i++) {
    var numeric = prompt("Enter Element # " + (i + 1) + " of Array: ");
    if (isNaN(Number(numeric))) { alert("Element must be numeric"); i--; continue; }
    else arr.push(Number(numeric));
}
do {
    var Continue = false;
    //Menu
    do {
        var Options = prompt("a : display array with the same receiving order \n" +
            "b : display array with ascending order\n" +
            "c : display array with descending order\n" +
            "d : reversed version of original array\n" +
            "e : display even numbers only from array\n" +
            "f : is Factor of \n" +
            "g : display new array with 30% discount for all numbers in original array\n" +
            "h : display string which represent all numbers of array concated with ***\n");
    } while (Options == null || Options == '' || Options.length > 1)
    switch (Options) {
        case "a": {
            console.log(arr)
            Continue = confirm("Result of Option a: \n " + arr + "\n Do You want To Continue Running?");

            break;
        } case "b": {
            var temparr = arr.slice();
            temparr.sort(function (a, b) { return a - b; });
            Continue = confirm("Result of Option b: \n" + temparr + "\n Do You want To Continue Running?");
            break;
        }
        case "c": {
            var temparr = arr.slice();
            temparr.sort(function (a, b) { return ((a - b) * -1); });
            Continue = confirm("Result of Option c: \n" + temparr + "\n Do You want To Continue Running?");
            break;
        }
        case "d": {
            var temparr = arr.slice();
            temparr.reverse();
            Continue = confirm("Result of Option d: \n" + temparr + "\n Do You want To Continue Running?");
            break;
        }
        case "e": {
            var temp = arr.filter(function (a) { return a % 2 == 0; })
            if (temp.length == 0) {
                alert("No Even Numbers");
                Continue = confirm("Do You want To Continue Running?");
            }

            else Continue = confirm("Result of Option e: \n" + temp + "\n Do You want To Continue Running?");
            break;
        }
        case "f": {
            do {
                var number = prompt("Enter number ");
            } while (number == null || number == '')
            number = Number(number);
            if (!isNaN(number)) {
                var temp = arr.filter(function (a) { return a % number == 0; })
                if (temp.length == 0) {
                    alert("No Numbers divisable by " + number);
                    Continue = confirm("Do You want To Continue Running?");
                }
                else Continue = confirm("Result of Option f: \n" + temp + "\n Do You want To Continue Running?");
            }
            else { alert("Must be a number") }
            break;

        }
        case "g": {
            var afterDiscount = arr.map(function (val) { return val * 0.7; });
            //afterDiscount.forEach(function (a) { document.getElementById("h1").innerText += " " + a })
            Continue = confirm("Result of Option g: \n" + afterDiscount + "\n Do You want To Continue Running?");
            break;
        }
        case "h": {
            Continue = confirm("Result of Option h: \n" + arr.join("***") + "\n Do You want To Continue Running?");
            break;
        }
        default:
            alert("Not Supported");
    }
} while (Continue);