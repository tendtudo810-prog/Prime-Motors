 document.addEventListener("DOMContentLoaded", () => {
 let slideIndex = 0;
 
 const slides = document.querySelectorAll('.slide');
 
 function mudarSlide(direcao){
    if(!slides || slides.length === 0){
        console.error("Erro jv n achou");
    return;
    }
 
    slides[slideIndex].classList.remove('ativo');
 
    slideIndex += direcao;
 
    if (slideIndex >= slides.length){
        slideIndex = 0;
    }
 
    if(slideIndex < 0 ) {
        slideIndex = slides.length - 1;
    }
 
    slides[slideIndex].classList.add('ativo');
}
 
const botaoVoltar = document.querySelector('.prev');
const botaoAvancar = document.querySelector('.next');
 
if(botaoVoltar) {botaoVoltar.addEventListener('click', () => mudarSlide(-1));
}
 
if(botaoAvancar) {botaoAvancar.addEventListener('click', () => mudarSlide(1));
}
 
setInterval(() => {
    mudarSlide(1);
}, 5000);
});