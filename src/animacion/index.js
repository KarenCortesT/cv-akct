
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    let animado = document.getElementById('animado');
    let alturaAnimado = animado.getBoundingClientRect().top;
    
    if(alturaAnimado -200 <scrollTop){
        animado.style.animation = "circleOne 2s";
    }
}
window.addEventListener('scroll', mostrarScroll);


function mostrarScrollTwo(){
    let scrollTopTwo = document.documentElement.scrollTop;
    let animadoTwo = document.getElementById('animadoTwo');
    let alturaAnimado = animadoTwo.getBoundingClientRect().top;
    if(alturaAnimado +200< scrollTopTwo){
        animadoTwo.style.animation = "circleTwo 2s";
    }
}
window.addEventListener('scroll', mostrarScrollTwo);

function mostrarScrollThree(){
    let scrollTopThree = document.documentElement.scrollTop;
    let animadoThree = document.getElementById('animadoThree');
    let alturaAnimado = animadoThree.getBoundingClientRect().top;
    if(alturaAnimado +200< scrollTopThree){
        animadoThree.style.animation = "circleThree 2s";
    }
}
window.addEventListener('scroll', mostrarScrollThree);