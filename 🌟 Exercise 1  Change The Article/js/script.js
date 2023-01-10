
let getArticle = document.querySelector("article")

let h1 = document.querySelector('h1');
console.log(h1.innerHTML);

let allParagraphe = document.querySelectorAll("p");

allParagraphe[3].remove();

let firstH2 = document.querySelector("h2");
firstH2.addEventListener("click",clickH2);

/**
 * @description: Put h2 background color to red
 */
function clickH2(){
    firstH2.style.backgroundColor = "red";
}

let firstH3 = document.querySelector("h3");
firstH3.addEventListener("click",clickH3);

/**
 * @description: hidden h3 when on click to h3
 */
function clickH3(){
    getH3.style.display = "none";
}

let btn = document.createElement("button");
let textBtn = document.createTextNode("Metttre en gras");
btn.appendChild(textBtn);
getArticle.appendChild(btn);

btn.addEventListener("click",clickBtn);

function clickBtn(){
    for (let item of par){
        item.style.fontWeight = "bold";
    }
}

h1.addEventListener("mouseover",overH1);

function overH1(){
    let rendomFont = Math.floor(Math.random()*100)
    h1.style.fontSize = rendomFont + "px";
}