const divContenedorSaludos = document.querySelector("#contenedor-saludos");
const inputCantSaludos = document.querySelector("#cant-saludos");

//const CANT_SALUD_MAX = 30;




function generar(){

    divContenedorSaludos.innerHTML = "";

    for (let i = 0; i < (inputCantSaludos.value); i++) {
        //divContenedorSaludos.innerHTML += "<p> hola! "+i+" </p>";
        divContenedorSaludos.innerHTML += `<p> hola! ${i+1} </p>`;
    }
}