`use strict` 

//Contenedor de paneles flexible para la sección de Experiencia Profesional
let panels = document.querySelectorAll('.panel');



//Hace toggleOpen sobre el estilo .open para intercambiar el foco entre paneles 
function toggleOpen() {
    if(this.classList.contains('open')){
        this.classList.remove('open');    
        return;
    }
    panels.forEach(panel => panel.classList.remove('open'));
    this.classList.toggle('open');

}


function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//Añadimos dos eventos Javascript sobre cada uno de los paneles. Uno para el click y otro para el final de la transición
panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen); 
    panel.addEventListener('transitionend', toggleActive);
});
