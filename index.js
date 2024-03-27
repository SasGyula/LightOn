import { jatekter, kapcsolok, listaGeneral } from "./fuggvenyek.js";

const GOMBOK = listaGeneral();
const JATEKTER = $("#jatekter")
JATEKTER.html(jatekter(GOMBOK))
const UJJATEK = $(".ujJatek")
UJJATEK.on("click", function(){
    location.reload()
})