
// Get Button
let btn = document.getElementById("btn");

// Get Div
let div = document.querySelector("div");

// When button is clicked
btn.addEventListener("click", clickEvent)

// When the mouse is over
btn.addEventListener("mouseover", mouseoverEvent);

// When the mouse is out
btn.addEventListener("mouseout", mouseoutEvent);

/**
 * @description: this function add new h1 with a random color
 * @returns: voids
 */
function clickEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    let text = document.createElement("h1");
    text.innerHTML = "Hello Everybody !";
    text.style.color = "#" + randomColor;
    div.appendChild(text);
}

/**
 * @description: this function generate a new background color
 * @returns: void
 */
function mouseoutEvent(){
    let randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16);
    div.style.background ="#" + randomColor
}

/**
 * @description: this function add a background image
 * @returns: void
 */
function mouseoverEvent(){
    div.style.background = "url(https://img-19.commentcamarche.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg)";
}