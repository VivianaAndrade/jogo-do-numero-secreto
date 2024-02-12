/*BOAS PRÁTICAS: Não repetir código

USANDO FUNÇÕES PARA FAZER O CÓDIGO DO JOGO NUMERO SECRETO:
*/ 
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatório();
let tentativas = 1;

//FUNÇÃO COM PARAMETRO - CRIADA PARA EXIBIR TEXTO NA TELA INDEPENDENTE DA TAG UTILIZADA
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
//CHAMANDO A FUNÇÃO E INFORMANDO O TEXTO A SER EXIBIDO
exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10:');
}

exibirMensagemInicial();

//FUNÇÃO SEM PARAMETRO
function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? ' tentativas' : ' tetativa';
        let mensagemTentativas = 'Você descobriu o número secreto com  ' + tentativas + palavraTentativa;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1','O numero secreto é menor');
        }
        else
        exibirTextoNaTela('h1', 'O numero secreto é maior!')
    }
    //tentativas = tentativas + 1;
    tentativas ++;
    limparCampo();
    }
/*
input é um campo html onde esta recebendo os valores digitados
.value referencia (pega) o valor digitado e atribui o valor para variável chute.

Comparando valores com retortno em booleano (true or false), lembrando que o console não exibe ao usuário, ele é uma ferramenta do desenvolvedor:
    console.log(chute==numeroSecreto); 
*/   

//FUNÇÃO COM RETORNO
function gerarNumeroAleatório() {
    //return 
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    //verifica se o elemento esta na lista de numero escolhido
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if (listaNumerosSorteados = numeroLimite)
        listaNumerosSorteados = [];

    if (listaNumerosSorteados.includes(numeroEscolhido)){
    //gera novo numero caso o elemento ja esteja na lista
        return gerarNovoNumeroAleatório();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
        
     
    /*Math é uma função matemática que gera numeros aleatórios e o parseInt transforma os numeros gerado em valores inteiros */
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatório();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}