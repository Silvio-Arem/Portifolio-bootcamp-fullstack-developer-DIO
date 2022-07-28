//Assincronicidade
//Assíncrono pode ser feito duas tarefas ao mesmo tempo. Em contra partida quando é síncrono só pode iniciar um processo após o anterior ser concluído.
//O Javascript roda de maneira síncrona.

//Promises
//Objeto de processamento assíncrono
//É um dado que inicialmente seu valor é desconhecido. Ele pode, então, ser resolvido ou rejeitado (".then()" ou ".catch()" respectivamente).
//Pode ter 3 estados:
//Pending: pendente (no momento de sua criação);
//Fulfilled: completado;
//Rejected: rejeitado;
//Estrutura e sintaxe de um promise:

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

await myPromise
    .then((result) => result + ' passado pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

// Funções assincronas no Javascript precisam das palavras "async" e "await" para serem bem sucedidas, do contrário o codigo não vai "esperar" a promise ser resolvida e vai dar errado. Exemplo abaixo:

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + ' passado pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;
} //copie e cole essa função assincrona no console do navegador, depois chame-a digitando "await resolvePromise()".

//Aplicando o uso do "Try...catch" nesta mesa função ficaria desta forma abaixo:

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

  let result;  

    try {
    result = await myPromise
        .then((result) => result + ' passado pelo then')
        .then((result) => result + ' e agora acabou!')
    } catch(err) {
        result = err.message;
    }

    return result;
}

//-----------------------------------------------------------------------------------------

//"API" (Aplication Programming Interface): Uma API é uma forma de intermediar os resoultadosdo back-end com o que é apresentado no front-end. Você consegue acessá-la por meio de URLs.

//É muito comum que APIs retornem seus dados no formato "JSON" (JavaScript Object Notation), portanto precisamos tratar esses dados quando os recebemos.

//Metodo "Fetch" para consumo de APIs, o fetch é utilizado a fim de tratar os dados de uma API, ele vai retornar sempre uma Promise, então, sempre deve se usar o await quando for utilizar o fetch.
//Abaixo está a estrutura e sintaxe de um fetch:

fetch(url, options)
    .then(Response => Response.json())
    .then(json => console.log(json))

//isso retornará numa Promise.

//Com isso você poderá fazer operações no banco de dados como: POST, GET, PUT, DELETE, etc...)
//Abaixo dois exemplos de uso do fetch para operações no banco:

//Exemplo 1:
fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',

})
    .then(response => response.json())
    .then(json => console.log(json))
    //retorna uma Promise.

//Exemplo 2:
fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)

})
    .then(response => response.json())
    .then(json => console.log(json))
    //retorna uma Promise.