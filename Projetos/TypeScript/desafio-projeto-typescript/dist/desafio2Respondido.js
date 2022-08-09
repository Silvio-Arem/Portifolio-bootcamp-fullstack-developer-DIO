"use strict";
//Desafio 2:
// Como podemos melhorar o esse código usando TS? 
/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */
;
const pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz";
const pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";
const pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};
const pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};
//Resposta 2(usando enum e type):
var Ramo;
(function (Ramo) {
    Ramo[Ramo["Atriz"] = 0] = "Atriz";
    Ramo[Ramo["Padeiro"] = 1] = "Padeiro";
})(Ramo || (Ramo = {}));
const pessoa5 = {
    nome: 'maria',
    idade: 29,
    profissao: Ramo.Atriz
};
const pessoa6 = {
    nome: 'roberto',
    idade: 19,
    profissao: Ramo.Padeiro
};
const pessoa7 = {
    nome: 'laura',
    idade: 32,
    profissao: Ramo.Atriz
};
const pessoa8 = {
    nome: 'carlos',
    idade: 19,
    profissao: Ramo.Padeiro
};
