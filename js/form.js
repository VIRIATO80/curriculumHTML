


//Validaciones del formulario de contacto para el campo textarea
var mensaje = document.getElementById("mensaje");


function contarPalabras(){

    //Eliminamos dobles espacios
    var palabras = this.value.replace(/\s{2,}/g, ' ').split(' ');
    //La longitud del value debe ser igual o menor a 50;
    if(palabras.length > 150){
        this.validity.valid = false;
        this.setCustomValidity('Este campo admite un máximo de 150 palabras');
    }else{
        this.validity.valid = true;
        this.setCustomValidity('');
    }
}

mensaje.addEventListener('blur', contarPalabras);


//Validaciones para mi botón
var formulario = document.getElementById("contactoForm");

function enviar(event){

   event.preventDefault();
}

formulario.addEventListener('submit', enviar);


//Validación que controla el valor del select
var seleccionable = document.getElementById("motivo");

seleccionable.addEventListener('change', function(){
   if(this.value == 'otro'){
        document.getElementById('inputOculto').classList.remove('oculto');
   }else{
       document.getElementById('inputOculto').classList.add('oculto');
   }
});

