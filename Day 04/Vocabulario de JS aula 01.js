/* Vocabulario  */

<--------------------------------------------------XXX<-------------------------------------------------->
alert
 Emite uma alerta e uma notificação no navegador
	alert('Boas vindas ao jogo do número secreto');

/* */

let
	Variavel restrita ao bloco, ou seja fica apenas restria ao que esta entre {} 
	let numeroMaximo = 5000;
	
/* */

parseInt
	Função que converte uma String em numero inteiro
	parseInt(Math.random() * numeroMaximo + 1);
	
/* */

 document
	faz algo diretamente no documento
		 document.getElementById
			Pega um elemento pelo ID no HTML
				let quantidade = parseInt(document.getElementById('quantidade').value);
	



console.log()
	Exibe uma determinada informação no console
	console.log(numeroSecreto);

/* */

while (Enquanto)
	É uma estrutura de controle de fluxo que executa um bloco de código repetidamente enquanto uma condição especificada for verdadeira. 
	É uma das formas mais básicas de criar loops em JavaScript.
		while (chute != numeroSecreto) {
			chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
			// se chute for igual ao número secreto
			if (chute == numeroSecreto) {
				break;
			} else {
				if (chute > numeroSecreto) {
					alert(`O número secreto é menor que ${chute}`);
				} else {
					alert(`O número secreto é maior que ${chute}`);
				}
				// tentativas = tentativas + 1;
				tentativas++;
			}
		}

/* */

prompt
	É um alerta com uma caixa de pergunta
	prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
	
/* */

if / else / break 
	Função para executar blocos de codigos dentro das condições 
				if (chute == numeroSecreto) {
				break;
			} else {
				if (chute > numeroSecreto) {
					alert(`O número secreto é menor que ${chute}`);
				} else {
					alert(`O número secreto é maior que ${chute}`);
				}
				// tentativas = tentativas + 1;
				tentativas++;
			}
			
/* */

function 
	Função que executa determinada ação 
		function randomNumer (min, max){
		return Math.floor(Math.random() * (max - min + 1))+ min;
}

/* */

for (Para cada)
	faz uma função de para cara item
		for (let i = 0; i < quantidade; i++){
        number = randomNumer (de, ate);
        while (sorteados.includes(number)){
            number = randomNumer (de, ate);
        }
        

/* */



