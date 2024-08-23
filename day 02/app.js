let nome = document.getElementById('Nome').value;
let idade = document.getElementById('Idade').value;
let linguagem = document.getElementById('Linguagem').value;

function showText(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    //resonsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function showMsg (){
    showText('p', `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
}



