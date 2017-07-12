`use strict`

var XHR;

if(window.XMLHttpRequest){
    XHR = new XMLHttpRequest();
}

//XHR.open("GET", "http://localhost:8000/api/task/1", true);
XHR.open("POST", "http://localhost:8000/api/task", true);
XHR.setRequestHeader("Content-Type", "application/json");



XHR.onreadystatechange = function(){
    if(XHR.readyState === 4 && XHR.status == 200){
        console.log(JSON.parse(XHR.responseText));
    }else if(XHR.readyState === 4 && XHR.status == 201) {
        console.log(XHR.responseText);
    }else if(XHR.readyState === 4 && XHR.status == 404) {
        console.log("Página no encontrada");
    }    
}


XHR.send(JSON.stringify({"name": "Petición martes"}));

//XHR.send();