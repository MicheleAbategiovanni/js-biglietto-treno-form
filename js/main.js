const nameEl = document.querySelector("#name");
const lastNameEl = document.querySelector("#lastName");
const ageEl = document.querySelector("#ageUser");
const distanceEl = document.querySelector("#distance");
const buyTicket = document.querySelector(".btn");
let ticket;
let coachRandom = Math.floor(Math.random() * 14);
let sitRandom = Math.floor(Math.random() * 40);
let codeTicketRandom = Math.floor(Math.random() * 1000000) + 10000;


buyTicket.addEventListener("click", function () {

    console.log("Hai inserito come Nome: ", nameEl.value);
    console.log("Hai inserito come Cognome: ", lastNameEl.value);
    console.log("Hai inserito come Età: ", ageEl.value);
    console.log("Hai inserito come Distanza: ", distanceEl.value, "km");

    ticket = distanceEl.value * .21;

    console.log("Costo del biglietto", ticket.toFixed(2));

    // const salvato = ageEl.value;
    // Nel caso in cui volessimo salvere i nostri valori

    let fullName = nameEl.value + " " + lastNameEl.value;

    full_Name.innerHTML = fullName;

    if (ageEl.value == 'underage') {

        ticket = (ticket - (ticket * .20)).toFixed(2);

        price.innerHTML = ticket;

        console.log("Costo del biglietto scontato MINORENNI: " + ticket)

    } else if (ageEl.value == 'adult') {

        ticket = ticket.toFixed(2);

        price.innerHTML = ticket;

        console.log("Costo del biglietto SENZA SCONTO da 18 a 65 anni: " + ticket)

    } else if (ageEl.value == 'over65') {

        ticket = (ticket - (ticket * .40)).toFixed(2);

        price.innerHTML = ticket;

        console.log("Costo del biglietto scontato OVER 65: " + ticket)
    }

    coach.innerHTML = coachRandom;
    sit.innerHTML = sitRandom;
    codeTicket.innerHTML = codeTicketRandom;


});
