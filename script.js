const CorEscolhida = document.getElementById("choosencolor")

function gerarCorAleatoria() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    const corRGB = rgbHex(red, green, blue);
    return corRGB;
}

function rgbHex(red, green, blue) {
    const codigoHex = ((red << 16) | (green << 8) | blue).toString(16).padStart(6, '0');
    return `#${codigoHex}`;
}

const CliqueBotao = () => {
    const cor = gerarCorAleatoria()
    CorEscolhida.textContent = cor
    MensagemGerada.textContent = "Your generated color: "
    document.body.style.backgroundColor = cor
    //MensagemGerada.classList.toggle("vis","inv", true)
    console.log('Generated Color: ', cor)
}

const Botao = document.getElementById("buttonc")
const MensagemGerada = document.getElementById("generatedmessage")
Botao.addEventListener("click", CliqueBotao)





//##### TESTE #####


//let caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789'
//let cor = ''

// for (i = 0; i < 6; i++){
//     const CorRandomica = Math.floor(Math.random() * caracteres.length)
//     cor += caracteres.charAt(CorRandomica)
// }