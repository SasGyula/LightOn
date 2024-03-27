export function listaGeneral(){
    const gombok = {};
    for(let i = 0; i<9; i++){
        gombok[i] = Math.floor(Math.random() * 2)
    }
    return gombok
}

export function jatekter(lista){
    let txt = "<div>"
    for(let i = 0; i<9; i++){
        txt += `<div class="gombok${lista[i]}"></div>`
    }
    txt += "</div>"
    return txt
}
export function kapcsolok(event){

}
