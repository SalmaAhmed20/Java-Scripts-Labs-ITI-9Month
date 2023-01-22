do {
    var imgname = prompt("Enter Imager Name");
    if (imgname == null || imgname == '') continue;
    var imgcolor = prompt("Enter Border Name");
    if (imgcolor == null || imgcolor == '') continue;
} while ((imgname == null || imgname == '') && (imgcolor == null || imgcolor == ''));

document.getElementById("h4").innerText="This is ur image";
document.getElementById("h4").style.color=imgcolor;
var imgElement = document.getElementById("img01");
imgElement.setAttribute("src", imgname+".jpg");
imgElement.style.border="5px solid "+imgcolor;