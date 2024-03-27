import { jatekter, kapcsolok, listaGeneral, hanyDarab } from "./fuggvenyek.js";

const GOMBOK = listaGeneral(3);
const JATEKTER = $("#jatekter")
JATEKTER.html(jatekter(GOMBOK))
const UJJATEK = $(".ujJatek")
UJJATEK.on("click", function(){
    location.reload()
})
console.log(GOMBOK.length)
const PONTOK = $(".pontok")
PONTOK.html(hanyDarab(GOMBOK))