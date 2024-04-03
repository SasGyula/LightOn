export function listaGeneral(n){
    const gombok = [];
    for(let i = 0; i<n*n; i++){
        gombok[i] = Math.floor(Math.random() * 2)
    }
    return gombok
}
export function jatekter(lista){
    let txt = "<div>"
    for(let i = 0; i<lista.length; i++){
        txt += `<div id="${i}" class="gombok${lista[i]}"></div>`
    }
    txt += "</div>"
    return txt
}
export function hanyDarab(lista){
    let db = 0;
    for(let i = 0; i<lista.length; i++){
        if (lista[i] > 0){
            db += 1
        }
    }
    return db
}
export function kapcsolok(event){
    const id = event.target.id;
    const clickedElement = $("#" + id); 


    clickedElement.toggleClass("gombok0 gombok1");
    const PONTOK = $(".pontok");
    PONTOK.html("<p class='pontok'>" + hanyDarab(GOMBOK) + "</p>");
}
