import { jatekter, kapcsolok, listaGeneral, hanyDarab } from "./fuggvenyek.js";

const GOMBOK = listaGeneral(3);
const JATEKTER = $("#jatekter")
JATEKTER.html(jatekter(GOMBOK))
const UJJATEK = $(".ujJatek")
UJJATEK.on("click", function(){
    location.reload()
})
console.log(GOMBOK)
const PONTOK = $(".pontok")
PONTOK.html("<p class='pontok'>" + hanyDarab(GOMBOK) + "</p>")
for(let i = 0; i<JATEKTER.length;i++){
    JATEKTER[i].addEventListener("click", kapcsolok)
}