const nameEl = document.querySelector("#name");
const lastNameEl = document.querySelector("#lastName");
const ageEl = document.querySelector("#ageUser");
const distanceEl = document.querySelector("#distance");

const buyTicket = document.querySelector(".btn");


nameEl.value;
lastNameEl.value;
ageEl.value;
distanceEl.value;


buyTicket.addEventListener("click", function () {

    console.log("Hai inserito come Nome: ", nameEl.value);
    console.log("Hai inserito come Cognome: ", lastNameEl.value);
    console.log("Hai inserito come Età: ", ageEl.value);
    console.log("Hai inserito come Distanza: ", distanceEl.value, "km");
    



});



//   console.log( inputEl.value );
