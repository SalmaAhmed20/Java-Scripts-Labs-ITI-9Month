window.addEventListener('load', function () {
    let button = document.getElementById("Add");
    button.addEventListener('click', function () {
        var task = document.getElementById("task").value;
        if (task) {
            var table = document.getElementById("listTasks");
            var row = table.insertRow(-1);
            var c1 = row.insertCell(0);
            var c2 = row.insertCell(1);
            var c3 = row.insertCell(2);
            c1.innerHTML += `<input type="checkbox" class="pl">`
            c2.innerHTML += "<h2>" + task + "</h2>"
            c3.innerHTML += `<button class="btn"><i class="fa fa-trash"></i></button>`
            var checkbox = document.querySelectorAll('.pl');
            for (i = 0; i < checkbox.length; i++) {
                checkbox[i].onclick = function () {
                    this.parentElement.parentElement.children[1].firstChild.classList.toggle('donetasks');
                }
            }
            var deleteIcon = document.querySelectorAll('.btn');
            for (i = 0; i < deleteIcon.length; i++) {
                deleteIcon[i].onclick = function () {
                    if (this.parentElement.parentElement.children[1].firstChild.classList.contains('donetasks'))
                        document.getElementById("listTasks").deleteRow(this.parentElement.parentElement.rowIndex);
                    else {
                        var confm = confirm("Are You Sure you want to delete it?");
                        if (confm)
                            // this.parentElement.parentElement.style.display = "none";
                            document.getElementById("listTasks").deleteRow(this.parentElement.parentElement.rowIndex);

                    }
                }
            }
        }
    });
});