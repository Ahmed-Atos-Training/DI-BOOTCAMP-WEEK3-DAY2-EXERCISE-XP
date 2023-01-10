//Get Form
let form = document.forms[0];

//Get Button submit
let btn = document.getElementById("submit");

//When submit form
btn.addEventListener("click", volume);

/**
 * @description: this function calculate the volume of a sphere.
 * @param {event} e 
 * @returns: void
 */
function volume(e) {
  e.preventDefault();
  let radius = form.elements.radius.value;
  let volume = (4 / 3) * 3.14 * (radius ** 3);
  document.getElementById("volume").value = volume;
}
