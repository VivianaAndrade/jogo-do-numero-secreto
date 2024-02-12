/*BOAS PRÁTICAS: Evitar repetição de código

 NOVA MANEIRA DE FAZER O CÓDIGO DO APP.JS:
*/

//ARMAZENANDO O VALOR GERADO NA FUNÇÃO gerarNumeroAleatório() EM UMA VARIÁVEL.
let numeroSecreto = gerarNumeroAleatório();

//FUNÇÃO COM PARAMETRO
    function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector (tag);
        campo.innerHTML = texto;
    }

    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero entre 1 a 10');

//FUNÇÃO SEM PARAMETRO
    function verificarChute(){
        let chute = document.querySelector('input').value;
        //console.log (chute==numeroSecreto) - gera um resultado booleano (true or false).
        console.log (numeroSecreto);

//input - seleciona o campo input do html 
//.value pega apenas o valor digitado no campo e armazena na variavel chute.

    }

//FUNÇÃO QUE RETORNA UM VALOR
    function gerarNumeroAleatório(){
        return parseInt(Math.random() * 10 + 1);
//Match.random é uma função matemática para gerar numeros aleatórios, e o parseInt transforma os números gerados em numeros inteiros.

    }


/*
APRENDIZADOS SOBRE FUNÇÕES:

Toda função em JavaScript é declarada utilizando a palavra-chave function. Essa palavra-chave é utilizada para criar uma função.

As funções em JavaScript podem ter um nome. Na verdade, é uma prática comum dar um nome descritivo às funções para facilitar a leitura e o entendimento do código. Esses nomes são usados para chamar a função posteriormente ou para se referir a ela dentro do próprio código, permitindo que você reutilize a função em diferentes partes do programa.

Parênteses (): Após o nome da função (se houver), os parênteses são usados para definir os parâmetros da função.

Os parênteses em uma função no JavaScript são usados para conter os argumentos que a função recebe, permitindo a passagem de informações para a função e influenciando seu comportamento e resultados.

*/