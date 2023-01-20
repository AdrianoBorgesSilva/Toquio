function limparSec1() {
    let telasec1 = document.getElementById('tela-escura')
    telasec1.style.visibility = 'hidden'
}

function mostrarSec1() {
    let telasec1 = document.getElementById('tela-escura')
    telasec1.style.visibility = 'visible'
}

function trocarFoto1 (){
    let ft = document.getElementById('secao1')
    ft.style.backgroundImage = "url('imagens/toquio2.jpg')";
}

function trocarFoto2 (){
    let ft = document.getElementById('secao1')
    ft.style.backgroundImage = "url('imagens/toquio4.jpg')";
}

function trocarFoto3 (){
    let ft = document.getElementById('secao1')
    ft.style.backgroundImage = "url('imagens/toquio1.jpg')";
    ft.style.backgroundPosition = '-900px center'
}

function trocarFoto4 (){
    let ft = document.getElementById('secao1')
    ft.style.backgroundImage = "url('imagens/toquio5.jpg')";
}

function trocarFoto5 (){
    let ft = document.getElementById('secao1')
    ft.style.backgroundImage = "url('imagens/toquio6.jpg')";
}
