//Exercicio somar todos os numeros de um array com o reduce:
function somaNumeros(array) {
    return array.reduce(function(prev, current) {
        return prev + current;
    })
}

const array = [1, 2];

console.log(somaNumeros(array));

//Exercicio 2 reduçe:

const lista = [
    {
        nome: 'sabão em pó',
        preco: 30
    },
    {
        nome: 'cereal',
        preco: 12
    },
    {
        nome: 'toalha',
        preco: 30
    },
];

const saldoDisponivel = 100;

function calculaSaldoFinal(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldoFinal(saldoDisponivel, lista));