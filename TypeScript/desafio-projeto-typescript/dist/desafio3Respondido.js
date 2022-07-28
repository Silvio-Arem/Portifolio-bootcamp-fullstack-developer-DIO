"use strict";
//Desafio 3:
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
/*
const botaoAtualizar = document.getElementById('atualizar-saldo')! as HTMLInputElement;
const botaoLimpar = document.getElementById('limpar-saldo')!;
const soma = document.getElementById('soma')! as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo')!;

campoSaldo.innerHTML = "0";

function somarAoSaldo(soma: number): void {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number (soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
 */
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        console.log(somarAoSaldo);
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
