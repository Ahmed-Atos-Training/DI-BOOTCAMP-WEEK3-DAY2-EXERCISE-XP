let getForm = document.forms;
console.log(getForm[0]);

// Retrieve the inputs by their id
let getInputId1 = getForm[0].elements.fname;
let getInputId2 = getForm[0].elements.lname;

let btn = document.getElementById("submit");
let ulUser = document.querySelector(".usersAnswer");
btn.addEventListener("click", userAnswer);



/**
 * 
 * @description this functin user in list
 * @param {event} e 
 */
function userAnswer(e) {
    e.preventDefault()

  let fname = getInputId1.value;
  let lname = getInputId2.value;
  if (fname == "" || lname == "") {
    alert("Remplir tous les champs");
  }else{
    let liLname = document.createElement("li");
    liLname.innerHTML = "last name of the user is"+" "+ lname;
    let liFname = document.createElement("li");
    liFname.innerHTML ="first name of the user is"+" "+ fname;
    ulUser.appendChild(liFname);
    ulUser.appendChild(liLname);
  }

}