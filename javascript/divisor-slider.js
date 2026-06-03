// 1. Pega os elementos do HTML que você já criou
const slider = document.getElementById('slider');
const imgAntesWrapper = document.querySelector('.img-antes-wrapper');
const linhaSeparadora = document.querySelector('.linha-separadora');

// 2. Escuta quando o usuário mexe no slider (input do tipo range)
slider.addEventListener('input', (e) => {
    const valor = e.target.value; // Pega o valor de 0 a 100
    
    // 3. Atualiza a largura da imagem de "antes" e a posição da linha dourada
    imgAntesWrapper.style.width = `${valor}%`;
    linhaSeparadora.style.left = `${valor}%`;
});