initialMsg();



function initialMsg (){
    showText('h1','Definindo caminhos na area de programação');
};

function showText(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
};

function startQuestions() {
    changeClass('container__main__button', 'container__main__button__disabled');
    activateFirstQuestion();
    showText('p', 'Você pretende estudar Back-End ou Front-End?');
}

function activateFirstQuestion() {
    changeClass('container__question__1__disabled', 'container__question__1');
    changeClass('container__question__1__buttons__disabled', 'container__question__1__buttons');
    changeClass('container__button__1__disabled', 'container__button__1');
}


function secondQuestion() {
    const checkBox1Checked = document.getElementById('input__1').checked;
    const checkBox2Checked = document.getElementById('input__2').checked;

    changeClass('container__question__1__buttons', 'container__question__1__buttons__disabled');
    changeClass('container__button__1', 'container__button__1__disabled');
    changeClass('container__question__2__disabled', 'container__question__2');

    if (checkBox1Checked && checkBox2Checked) {
        activateFullStackPath();
    } else if (checkBox1Checked) {
        activateFrontEndPath();
    } else if (checkBox2Checked) {
        activateBackEndPath();
    } else {
        revertFirstQuestion();
    }
}

function activateFullStackPath() {
    changeClass('frontEnd__disabled', 'frontEnd');
    changeClass('backEnd__disabled', 'backEnd');
    activateButtonQ2();
    showText('p', 'Então você planeja ser um desenvolvedor FullStack. Mas por quais linguagens você pretende começar a estudar?');
}

function activateFrontEndPath() {
    changeClass('frontEnd__disabled', 'frontEnd');
    activateButtonQ2();
    showText('p', 'Então você planeja ser um desenvolvedor FrontEnd. Mas por quais linguagens você pretende começar a estudar?');
}

function activateBackEndPath() {
    changeClass('backEnd__disabled', 'backEnd');
    activateButtonQ2();
    showText('p', 'Então que você planeja ser um desenvolvedor BackEnd. Mas por quais linguagens você pretende começar a estudar?');
}

function activateButtonQ2() {
    changeClass('container__button__2__disabled', 'container__button__2');
}

function revertFirstQuestion() {
    changeClass('container__question__1__buttons__disabled', 'container__question__1__buttons');
    changeClass('container__button__1__disabled', 'container__button__1');
    showText('p', 'Você ainda não escolheu o que fazer? Comece escolhendo uma das etapas acima, antes de seguirmos.');
}

function changeClass(oldClass, newClass){
    const elementes = document.querySelectorAll(`.${oldClass}`);
    elementes.forEach(element => {
        element.classList.remove(oldClass);
        element.classList.add(newClass)
    })
}




/*
function firstQuestion (){
    let questionOne = document.getElementById('container__text__1')
    questionOne = showText('p', 'Voce pretende seguir para o BackEnd ou para o front end?')
    return questionOne;
}*/