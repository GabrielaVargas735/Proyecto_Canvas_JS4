import {particulas, numPart, Particula} from "./util.js"

function creaParticulas(x, y){
    for (let i = 0; i < numPart; i++){
        let p = new Particula(x, y);
        particulas.push(p);
    }
}
function dibujaParticulas(){
    for (let i in particulas){
        particulas[i].dibuja();
    }
}
function mueveParticulas(){
    for (let i in particulas){
        particulas[i].mueve();
    }
}

export {
    creaParticulas,
    dibujaParticulas,
    mueveParticulas
}