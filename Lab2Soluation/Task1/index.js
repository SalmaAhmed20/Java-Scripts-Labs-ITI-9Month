do {
    var flag = false;
    var userName = prompt("Enter Your Name");
    for (var i = 0; i < userName.length; i++) {
        if (!isNaN(Number(userName[i]))){
            flag = true;
            break;
        }
    }
    if (flag) {
        alert("Enter String with no digits");
        userName = null
    }
} while (userName == null || userName == '');
do {
    var flag = false;
    var PhoneNumber = prompt("Enter Your Phone");
    if (PhoneNumber.length == 11) {
        console.log("Length check");
        if (PhoneNumber[3] == "-") {
            console.log("- check");

            var firstpart = PhoneNumber.split("-");
            if (firstpart[0] == "010" || firstpart[0] == "011" || firstpart[0] == "012" || firstpart[0] == "015") {
                console.log(firstpart[0]);
                flag = true;
            }
        }
    }
    if (!flag) {
        alert("Not Valid");
        PhoneNumber = null
    }
} while (PhoneNumber == null || PhoneNumber == '');
document.getElementById("name").innerText = userName;
document.getElementById("Phone").innerText = PhoneNumber;