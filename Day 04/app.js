/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10'
*/
let numberList = []
let numberLimiter = 10;
let secretNumber = randomNumber();
let ttry = 1;


initialMsg();

function showText(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text
    //resonsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
/*
showText('h1', 'Jogo do numero secreto');
showText('p', 'Escolha um numero entre 1 e 10');
*/

function initialMsg(){
    showText('h1', 'Numero secreto');
    showText('p', 'Escolha um numero entre 1 e 10');
}



function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(secretNumber); 
        if(chute == secretNumber){
            changeClass();
            showText('h1','Acertou!');
            let wordTry = ttry > 1 ? 'tentativas' : 'tentativa';
            let msgTry = `Voce descobriu o numero secreto com ${ttry} ${wordTry}.`;
            showText('p', msgTry);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else{
            if (chute > secretNumber) {
                showText('p', `O numero secreto é menor que o ${chute}`);
            } else {
                showText('p', `O numero secreto é maior que o ${chute}`);
            }
           ttry++;
           cleanInput();
        }
}

function randomNumber() {
    let chosenNumber =  parseInt(Math.random() * numberLimiter + 1);
    let qtdList = numberList.length;
        if(qtdList == numberLimiter){
            numberList = [];
        }
    if (numberList.includes(chosenNumber)){
       return randomNumber();
    } else {
        numberList.push(chosenNumber);
        return chosenNumber;
    }
}


function cleanInput(){
    chute = document.querySelector('input');
    chute.value = '';
}

function newGame() {
    secretNumber = randomNumber();
    cleanInput();
    ttry = 1;
    initialMsg();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    console.log(numberList);
    changeClass();
}


function changeClass(){
    let titleText = document.getElementById('titleText');
    if (titleText.classList.contains('container__text__title')){
        titleText.classList.remove('container__text__title');
        titleText.classList.add('container__2texto');
    } else {
        titleText.classList.remove('container__2texto');
        titleText.classList.add('container__text__title');
    }
}
