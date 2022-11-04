const name = prompt("Scrivi il tuo nome");
const surname = prompt("Scrivi il tuo cognome");
const color =prompt("Qual è il tuo colore preferito?");

document.getElementById("password").innerHTML = `La tua password SUPER sicura è: ${name}${surname}${color}21`

//For fun


function ShowImage1() {
    var x = document.getElementById("password_good");

    if(x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    }

    else{
        x.style.visibility = "hidden";
    }
}

function ShowImage2() {
    var y = document.getElementById("password_bad");

    if(y.style.visibility === "hidden") {
        y.style.visibility = "visible";
    } 

    else{
        y.style.visibility = "hidden";
    }
}
