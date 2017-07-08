`use strict` 


//Validaciones del formulario de contacto para el campo textarea
var mensaje = document.getElementsByTagName("textarea");


function contarPalabras(){
    //Eliminamos dobles espacios
    palabras = this.value.replace(/\s{2,}/g, ' ').split(' ');
    //La longitud del value debe ser igual o menor a 50;
    if(palabras.length > 150){
        this.validity.valid = false;
        this.setCustomValidity('Este campo admite un máximo de 150 palabras');
    }
}

mensaje[0].addEventListener('blur', contarPalabras); 


//Validaciones para mi botón
var formulario = document.getElementById("contacto");

function enviar(event){
    this.setAttribute('disabled', "");
    event.preventDefault();
}



formulario.addEventListener('submit', enviar);



