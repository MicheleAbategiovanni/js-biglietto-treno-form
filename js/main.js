const nameEl = document.querySelector("#name");
const lastNameEl = document.querySelector("#lastName");
const ageEl = document.querySelector("#ageUser");
const distanceEl = document.querySelector("#distance");
const buyTicket = document.querySelector(".btn");
let ticket;



buyTicket.addEventListener("click", function () {
    nameEl.value;
    lastNameEl.value;
    ageEl.value;
    distanceEl.value;

    console.log("Hai inserito come Nome: ", nameEl.value);
    console.log("Hai inserito come Cognome: ", lastNameEl.value);
    console.log("Hai inserito come Età: ", ageEl.value);
    console.log("Hai inserito come Distanza: ", distanceEl.value, "km");

    ticket = distanceEl.value * .21;

    console.log("Costo biglietto", ticket.toFixed(2));

    if (ageEl.value === underage){
        console.log("Costo teen");

    }else if (ageEl.value = adult ) {
        console.log("Costo adulto");

    }else if (ageEl.value = over65){
        console.log("Costo over65");

    }

});
