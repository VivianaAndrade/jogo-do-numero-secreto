
//CRIANDO UMA VARIÁVEL PARA O H1, E SELECIONANDO O H1:
let titulo = document.querySelector('h1'); 

//MANEIRA DE EXIBIR MENSAGEM NA VARIÁVEL SELECIONADA ATRAVÉS DO innerHTML:
titulo.innerHTML = ('Jogo do numero secreto'); 

//CRIANDO UMA VARIÁVEL PAR AO PARAGRAFO E SECIONANDO O PARAGRAFO:
let paragrafo = document.querySelector('p');

//MANEIRA DE EXIBIR MENSAGEM NA VARIÁVEL SELECIONADA ATRAVÉS DO innerHTML:
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

//CRIANDO UMA FUNÇÃO E PASSANDO UMA AÇÃO PARA ELA:
function verificarchute(){
console.log ('O botão foi clicado!');
}

