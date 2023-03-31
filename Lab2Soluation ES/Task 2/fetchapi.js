async function getAllNews() {
    let allNews = await fetch
        ("https://newsapi.org/v2/everything?q=tesla&from=2022-12-27&sortBy=publishedAt&apiKey=2fa96c132af34256b66520e8e25071bc");
    let AllNewsObjects = await allNews.json();
    AllNewsObjects=AllNewsObjects.articles;
    for (let i =0;i<AllNewsObjects.length;i++)  {
        console.log(AllNewsObjects[i]);
        //let obj = await JSON.parse(AllNewsObjects[i]);
        let table = document.getElementById("news");
        var row = table.insertRow(-1);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        c1.innerText = i;
        c1.style.fontSize="30px"
        c2.innerHTML += `<center><img src="${AllNewsObjects[i].urlToImage}"></center>`
        c2.innerHTML += `<center><h1>${AllNewsObjects[i].title}</h1></center>`
        c2.innerHTML += `<center><p>${AllNewsObjects[i].description}<p></center>`
        c2.innerHTML += `<div><a href="${AllNewsObjects[i].url}">Source ${AllNewsObjects[i].source.name}</a></div>`
    }

}
getAllNews();