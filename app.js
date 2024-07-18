let numeroSecreto = 0;
let intentos = 0;
let listNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;
}

function verificarIntento(){

    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
   
    if(numeroDeUsuario === numeroSecreto){
       asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'ves':'veces'}`)
       document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
         //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){

   document.querySelector('#valorUsuario').value = '';
  

}


function generarNumeroSecreto() {

   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listNumerosSorteados);
    //si ya sorteamos todos los numeros

    if(listNumerosSorteados.length == numeroMaximo){

         asignarTextoElemento('p','Ya se sorteo todos los numeros posibles');
    }else{

           // si el numero generado esta incluido en la lista 
        if(listNumerosSorteados.includes(numeroGenerado)){
            
            return generarNumeroSecreto();
        }else{
        
        listNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }

    }

   

   
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    

}
function reniciarJuego(){

   //limpiar caja
   limpiarCaja();
   //Indicar mensaje de intervalo de números 
   //Generar el número aleatorio
   //Inicializar el número intentos
   condicionesIniciales();
   //Deshabilitar el botón de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');


}

condicionesIniciales();


