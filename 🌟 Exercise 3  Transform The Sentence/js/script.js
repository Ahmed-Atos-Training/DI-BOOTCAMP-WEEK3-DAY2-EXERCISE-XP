let allBoldItems = [];

let boldItems = document.getElementsByTagName("strong");

/**
 * @description: This function put all strong element in allBoldItem array
 * @returns: void
 */
function getBoldItems() {
  for (let item of boldItems) {
    allBoldItems.push(item);
  }
}

getBoldItems();

/**
 * @description: this function make blue color on each element in allBoldItems array
 * @returns: void
 */
function highlight() {
  for (let item of allBoldItems) {
    item.style.color = "blue";
  }
}

/**
 * @description: this function make black color on each element in allBoldItems array
 * @returns: void
 */
function returnNormal() {
  for (let item of allBoldItems) {
    item.style.color = "black";
  }
}

let paragraphe = document.querySelector("p");

paragraphe.addEventListener("mouseover", highlight);

paragraphe.addEventListener("mouseout", returnNormal);
