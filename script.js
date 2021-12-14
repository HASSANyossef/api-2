let link = document.querySelectorAll(".link");
let allData = [];

let country = "us";
getApi(country);


link.forEach(function (el)
{
    el.addEventListener("click", function (e)
    {
        document.querySelector(".active").classList.remove("active");
        el.classList.add("active");
        let coun = e.target.text;
        getApi(coun)
    })
})


function getApi(country)
{
    
let jason = new XMLHttpRequest();
jason.open("GET", `https://newsapi.org/v2/top-headlines?country=${country}
&apiKey=d9a70f8b7e7d46bfa204e90df761a368`)
jason.send();
jason.onreadystatechange = function ()
{
    if (jason.readyState == 4 && jason.status == 200)
        allData = JSON.parse(jason.response).articles;
    console.log(allData)
    showItems()
}}

function showItems()
{
    let temp = "";
    for (let i = 0; i < allData.length; i++)
    {
        temp+=`<div class="content">
            <div class="img">
                <img src=${allData[i].urlToImage} alt="">
            </div>
            <div class="text">
                <h2>${allData[i].title}</h2>
                <p>${allData[i].description}</p>
                <a id="url" href=${allData[i].url} target=_blank>قراءة الخبر</a>
            </div>
        </div>`
    }
    document.querySelector(".container").innerHTML = temp;
}