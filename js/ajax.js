

function pintarPersonas(personas) {

    var divListaVisitas = document.getElementById('divListaVisitas');
    //Limpiamos el contenido;
    divListaVisitas.innerHTML='';
	if (personas == null || personas.length === 0) {
		divListaVisitas.innerHTML='Puedes ser el primero en escribirme';
	} else {
		var nuevoContenido = '<ul>';
		for (var i = 0; i < personas.length; i++) {
			nuevoContenido += '<li><strong>' + personas[i].nombre + '</strong> (' + personas[i].email + ') </li>';
		}
        nuevoContenido += '</ul>';
		divListaVisitas.innerHTML=nuevoContenido;
	}
}



function leerListado(){
    var XHR = new XMLHttpRequest();
    XHR.open("GET", "/api/personas",true);
    XHR.setRequestHeader("Content-Type", "application/json");
      XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status == 200 ) {
            personas = JSON.parse(XHR.responseText);            
            pintarPersonas(personas);
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            pintarPersonas([]);
        }
    }

    XHR.send();     
}


function grabarPersonaAjax (persona) {
    var XHR = new XMLHttpRequest();
    XHR.open("POST", "/api/personas",true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status == 201 ) {
            leerListado();
        } else if (XHR.readyState === 4 && XHR.status === 404) {
            console.log("Página no encontrada");
        }
    }

    XHR.send(JSON.stringify(persona));
}



leerListado();