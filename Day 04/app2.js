let numberList = [];
let numberLimiter = 10;
let secretNumber = randomNumber();
let tentativa = 1;


mensagem();


function mensagem (){
    showText('h1', 'Numero secreto');
    showText('p', 'Escolha um numero entre 1 e 10');
}

function showText(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute (){
    let chute = document.querySelector('input').value;
    if(chute ==  secretNumber){
        changeClass();
        showText('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}`;
        showText('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > secretNumber){
            showText('p', `O numero secreto é menor que o ${chute}`);
        } else {
            showText('p', `O numero secreto é maior que o ${chute}`);
        }
        tentativa++;
        cleanInput();
    }
}

function randomNumber (){
    let numeroEscolhido = parseInt(Math.random ()* numberLimiter + 1);
    let quantidadeLista = numberList.length;
        if(quantidadeLista == numberLimiter) {
            numberList = [];
        }
        if (numberList.includes(numeroEscolhido)){
            return randomNumber();
        } else {
            numberList.push(numeroEscolhido);
            return numeroEscolhido;
        }
};

function cleanInput(){
    chute = document.querySelector('input');
    chute.value = '';
}

function newGame(){
    secretNumber = randomNumber();
    cleanInput();
    tentativa = 1;
    mensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function changeClass(){
    let titleText = document.getElementById('titleText');
    if(titleText.classList.contains('container__text__title')){
        titleText.classList.remove('container__text__title');
        titleText.classList.add('container__2texto');
    } else {
        titleText.classList.remove('container__2texto');
        titleText.classList.add('container__text__title');
    }
}