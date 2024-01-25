let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento("p", "El numero secreto es menor");
        limpiarCaja();
        intentos++;
    } else{
        asignarTextoElemento("p", "El numero secreto es mayor");
        limpiarCaja();
        intentos++;
    }
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = ""; //Obtener el elemento con querySelector utilizando su ID ("#")
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "El juego del numero secreto!");
    asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();