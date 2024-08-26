initialMsg();



function initialMsg (){
    showText('h1','Definindo caminhos na area de programação');
};

function showText(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
};

function startQuestions (){
    let buttonStart = document.getElementById('c__Button');
    let questionOne = document.getElementById('q1');
    let bQuestionOne = document.getElementById('q1Buttons');
    let bQuestionOneSend = document.getElementById('c__Button1');
    buttonStart = changeClass('container__main__button', 'container__main__button__disabled');
    questionOne = changeClass('container__question__1__disabled', 'container__question__1') ;
    bQuestionOne = changeClass('container__question__1__buttons__disabled', 'container__question__1__buttons');
    bQuestionOneSend = changeClass('container__button__1__disabled', 'container__button__1');
    showText('p', 'Voce prente estudar BackEnd ou o FrontEND?');
}

function secondQuestion(){
    let endQ1 = document.getElementById('q1Buttons');
    let endQ1Buttons = document.getElementById('c__Button1');
    let buttonQ2 = document.getElementById('c__Button2');
    let questionTwo = document.getElementById('q2');
    let checkBox1 = document.getElementById('input__1');
    let checkBox2 = document.getElementById('input__2');
    let frontEnd = document.getElementById('frontend');
    let backEnd = document.getElementById('backend');
    let checkBox1Checked = checkBox1.checked;
    let checkBox2Checked = checkBox2.checked;
    endQ1 = changeClass('container__question__1__buttons', 'container__question__1__buttons__disabled');
    endQ1Buttons = changeClass('container__button__1','container__button__1__disabled');
    questionTwo = changeClass('container__question__2__disabled','container__question__2') ;
    if (checkBox1Checked && checkBox2Checked){
        frontEnd = changeClass('frontEnd__disabled', 'frontEnd');
        backEnd = changeClass('backEnd__disabled', 'backEnd');
        buttonQ2 = changeClass('container__button__2__disabled', 'container__button__2');
        showText('p', 'Então voce planeja ser um desenvolvedor FullStack. Mas por quais linguagens voce pretende começar a estudar?')
    }
    if( checkBox1Checked == true && checkBox2Checked == false ){
        frontEnd = changeClass('frontEnd__disabled', 'frontEnd');
        buttonQ2 = changeClass('container__button__2__disabled', 'container__button__2');
        showText('p', 'Então voce planeja ser um desenvolvedor FrontEnd. Mas por quais linguagens voce pretende começar a estudar?')
    } else if (checkBox1Checked == false && checkBox2Checked == true){
        backEnd = changeClass('backEnd__disabled', 'backEnd');
        buttonQ2 = changeClass('container__button__2__disabled', 'container__button__2');
        showText('p', 'Então que voce planeja ser um desenvolvedor BackEnd. Mas por quais linguagens voce pretende começar a estudar?')
    } else if (checkBox1Checked == false && checkBox2Checked == false){
        endQ1 = changeClass('container__question__1__buttons__disabled','container__question__1__buttons');
        endQ1Buttons = changeClass('container__button__1__disabled','container__button__1');
        showText('p', 'Voce ainda não escolheu o que fazer? Comece escolhendo uma das etapas acima, antes de seguirmos.') }
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