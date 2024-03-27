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
        txt += `<div class="gombok${lista[i]}"></div>`
    }
    txt += "</div>"
    return txt
}
export function kapcsolok(lista){
    for (let index = 0; index < lista.length; index++) {
        lista[index].addEventListener("click",function (event) {
            lista.src=event.target.src;
        });  
    }
}
