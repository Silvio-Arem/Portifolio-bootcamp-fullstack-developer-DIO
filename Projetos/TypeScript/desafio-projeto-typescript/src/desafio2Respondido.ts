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

//Resposta 1(usando interface):
interface pessoa {
    nome: string,
    idade: number,
    profissao: string
};

const pessoa1 = {} as pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

const pessoa2 = {} as pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

const pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

const pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: "padeiro"
};

//Resposta 2(usando enum e type):
enum Ramo {
    Atriz,
    Padeiro
}

type Identificacao = {
    nome: string,
    idade: number,
    profissao: Ramo
}

const pessoa5: Identificacao = {
    nome: 'maria',
    idade: 29,
    profissao: Ramo.Atriz
};

const pessoa6: Identificacao = {
    nome: 'roberto',
    idade: 19,
    profissao: Ramo.Padeiro
};

const pessoa7: Identificacao = {
    nome: 'laura',
    idade: 32,
    profissao: Ramo.Atriz
}

const pessoa8: Identificacao = {
    nome: 'carlos',
    idade: 19,
    profissao: Ramo.Padeiro
};