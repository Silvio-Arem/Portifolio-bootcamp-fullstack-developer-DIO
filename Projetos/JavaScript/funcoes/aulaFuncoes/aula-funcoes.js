/* FUNÇÕES:

# As variáveis criadas dentro de uma função podem ser utilizadas apenas dentro dela.

# Ao utilizar o "return" é executada a função até o momento, a fim de utilizar o conteudo já realizado, importante lembrar que a função para com o uso do return deixando o conteudo dela para utilização no restante do codigo. 

# "Funções anonimas" uma variável pode executar uma função. */

const soma = function (a, b) {
    return `O resultado da soma é: ${a + b}`;
}

console.log(soma(1, 2));
console.log(soma(5, 4));

/* "Função autoinvocável" conhecida pela sigla IIFE (Immediately Invoked Function Expression), é uma função anônima entre parenteses, seguida por outro par de parenteses, que representa sua chamada. */

(
    function() {
        let name = "Digital Inovation One"
        return name;
    }
)();

/* "Callback" é uma função passada como argumento para outra. Utilizando callbacks, você tem maior controle da ordem de chamadas. */

const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma1 = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma1, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSoma);
console.log(resultSub);

/* PARAMETROS:
Encontra o numero mais alto dentro de uma sequencia de números passados usando o objeto "arguments". */

function findMax() {
    let max = -Infinity;
    
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return `O número mais alto é o ${max}!`;
}

console.log(findMax(1, 2, 3, 6, 90, 1));

/* Técnica "Spread" que é uma forma de lidar separadamente com elementos, aí o que era parte de um array se torna um elemento independente. */

function sum(x, y, z) {
    return `A somatória entre x, y e z é ${x + y + z}`;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

/* Técnica "Rest" combina os argumentos em um array, aí o que era um elemento independente se torna parte de um array */

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho();
confereTamanho(1, "três", 1 === 1);
confereTamanho(3, 4, 5);

/* Técnica "Object Destructuring" que consiste em tudo que estiver entre chaves "{}", podemos filtrar apenas os dados que nos interessam em um objeto. */

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

function userId({id}) {
    return `O id do user é ${id}`;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `O nome e sobrenome do user é ${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));

/* LOOPS:
"If/else" você estabelece uma condição dentro dos parenteses logo após o "if", depois voce abre chaves e realiza as declarações. */

function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }

    return `O numero é positivo? ${resultado}`;
}

console.log(numeroPositivo(2));
console.log(numeroPositivo(-9));

/* Abaixo estão mais algumas formas de escrever este mesmo codigo de formas mais curtas, poupando memoria do computador e deixando o codigo mais limpo. */

/* forma 2: */
function numeroPositivo2(num) {
    let resultado2;

    const ehNegativo = num < 0;

    if(ehNegativo) {
        resultado2 = false;
    } else {
        resultado2 = true;
    }

    return `O numero é positivo? ${resultado2}`;
}

console.log(numeroPositivo2(2));
console.log(numeroPositivo2(-9));

/* Forma 3 */
function numeroPositivo3(num) {
    const ehNegativo2 = num < 0;

    if(ehNegativo2) {
        return `O número é positivo? ${false}`;
    }

    return `O número é positivo? ${true}`;
}

console.log(numeroPositivo3(2));
console.log(numeroPositivo3(-9));

/* Existe o "else if" utilizado quando exise alguma condição além do If/else. */

function numeroPositivo4(num) {
    const ehNegativo3 = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo3) {
        return "Esse número é negativo!";
    } else if (!ehNegativo3 && maiorQueDez) {
        return "Esse número é positivo e meior que 10!"
    }

    return "Esse número é positivo!"
}

console.log(numeroPositivo4(2));
console.log(numeroPositivo4(-2));
console.log(numeroPositivo4(40));

/* Temos também o "Switch/case" que é ideal para quando temos que comparar muitos valores. Lmebrando que ele equivale à uma comparação de tipo e valor (===), e sempre precisa de um valor "default" para quando são apresentados opções fora das que designamos. */

function choosePokemon(id) {
    switch(id) {
        case 1:
            return "Você escolheu o Squirtle!";
        case 2:
            return "Você escolheu o Bulbasaur!";
        case 3:
            return "Você escolheu o Charmander!";
        default:
            return "Você não pode escolher o Pikechu, ele é meu!";
    }
}

console.log(choosePokemon(1));
console.log(choosePokemon(4));
console.log(choosePokemon("1"));

/* Tem o "For" que nada mais é que um loop dentro de elementos iteráveis (arrays, strings) */

function multiplicaPorDois(array) {
    let multiplicados = [];

    for(let i = 0; i < array.length; i++) {
        multiplicados.push(array[i] * 2);
    }

    return `Seus números multiplicados por 2 ficam assim: ${multiplicados}`;
}

const meusNumeros = [2, 33, 456, 356, 40];

console.log(multiplicaPorDois(meusNumeros));

/* Existe o "For in" que é o loop entre propriedades ("prop") enumeráveis de um objeto. */

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }

    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador",
}

console.log(forInExemplo(meuObjeto));

/* E o "For of" que é o loop entre estruturas iteráveis (arrays, strings). */

// Letras:
function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}

const palavra = "abacaxi";

console.log(logLetras(palavra));

// Números:
function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}

const nums = [30, 20, 233, 2];

console.log(logLetras(nums));

/* O "While" executa instruções até que a condição se torne falsa, ou enquanto a consição é verdadeira, como preferir. */

function exemploWhile() {
    let num = 0

    while(num <= 5){
        console.log(num); 
        num++;
    }
}

console.log(exemploWhile());

/* Também tem o "Do While" que executa instruções até que a condição se torne falsa, porém ele sempre vai execultar a primeira instrução "Do" pelo menos uma vez. */

// Exemplo 1:
function exemploDoWhile() {
    let num = 0;
    
    do {
        console.log(num);
        num++;
    } while(num <= 5)
}

console.log(exemploDoWhile());

// Exemplo 2:
function exemploDoWhile2() {
    let num = 6;

    do {
        console.log(num);
        num++;
    } while(num <= 5)
}

console.log(exemploDoWhile2());

/* THIS:
"This" é uma palavra reservada que serve como uma referência de contexto. Ela pode ser usada em diversos contextos como: Em um objeto (método), sozinha, função ou evento. Em um objeto vai referênciar o próprio dono do método, sozinha vai referênciar o objeto global (em navegadores, window), em funções vai referenciar o objeto global e no evento vai referênciar o elemento que recebeu o evento. */

/* This em um objeto (método): */

const pessoa = {
    firstName1: "André",
    lastName1: "Soares",
    id: 1,
    fullName1: function() {
        return this.firstName1 + " " + this.lastName1;
    },
    getId: function() {
        return this.id;
    }
}

console.log(pessoa.fullName1());
console.log(pessoa.getId());

/* Podemos utilizar o "Call" para definir qual "This" queremos chamar na função (quando tem o metodo tem o mesmo nome). */

const pessoa1 = {
    nome: 'Miguel',
}

const animal = {
    nome: 'Murphy',
}

function getSomenthing() {
    console.log(this.nome);
}

console.log(getSomenthing.call(animal));

/* Também é possível chamar o "call" utilizando parâmetros */

const myObj = {
    num1: 2,
    num2: 4,
}

function somacall(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

console.log(somacall.call(myObj, 1, 5));

/* Também é existe o "Apply" que funciona da mesma forma que o "call" porém quando vai se aplicar passando parametros deve-se utilizar um array "[]". */

// Apply sem parametros:
const pessoa1apply = {
    nome: 'Miguel',
}

const animalapply = {
    nome: 'Murphy',
}

function getSomenthingapply() {
    console.log(this.nome);
}

console.log(getSomenthingapply.apply(animalapply));

// Apply passando parametros:

const myObjapply = {
    num1: 2,
    num2: 4,
}

function somaapply(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

console.log(somaapply.apply(myObjapply, [1, 5]));

/* Também temos o "Bind" que clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro. */

const retornaNomes = function () {
    return this.nome;
}

let bruno = retornaNomes.bind({ nome: 'Bruno' });

console.log(bruno());

/* ARROW FUNCTION
A "arrow function" nada mais é do que a exclusão do "funcion", das chaves e do "return" quando ele seria pequeno. */

const helloWord = () => "Hello Word!";

console.log(helloWord());

// No caso de parametros, caso exista apenas um parametro, pode dispensar os parenteses.

// dois parametros:
const somaArrowFunction1 = (a, b) => a + b;

console.log(somaArrowFunction1(4, 6));

// um parametro:
const somaArrowFunction2 = a => a;

console.log(somaArrowFunction2(4));

/* Restrições da Arrow Functions:
Arrow Functions não fazem hoisting.
Não funcionam o "call, apply e bind".
Não funciona o objeto "arguments". */
