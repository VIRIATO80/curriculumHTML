`use strict`

var navbarItems = document.getElementsByClassName('navbar-item');

for(var i = 0; i < navbarItems.length; i++){
    navbarItems[i].addEventListener('click', function(event){
        limpiarEstilosMenu();
        this.classList.add('active');
        var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
        if(sectionToGo.length == 2){
            event.preventDefault();
            var goTo = sectionToGo[1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function limpiarEstilosMenu(){
    var listaItems = document.querySelectorAll('.navbar-item');
    listaItems.forEach(item => item.classList.remove('active'));
}


function getElementByIdAndScroll(id){
   
   var elem;
   if(id === ''){
        elem = document.getElementsByClassName('header')[0];
   }else{
        elem = document.getElementById(id);
   }
   scrollToElement(elem);    
}

function scrollToElement(element){
    var jump = (element.getBoundingClientRect().top - 70) * 0.2;
    document.body.scrollTop += jump;

    if(!element.lastJump || element.lastJump > Math.abs(jump)){
        element.lastJump = Math.abs(jump);        
        setTimeout(function(){
            scrollToElement(element);
        }, 20);
    }else{
       element.lastJump = null; 
    }


}