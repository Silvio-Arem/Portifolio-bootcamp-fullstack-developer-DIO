function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Silvio",
    idade: 27
}

const pessoa2 = {
    nome: "Dennis",
    idade: 8
}

const animal = {
    nome: "Hilda",
    idade: 1,
    raca: "Vira-lata"
};

console.log(calculaIdade.apply(pessoa1, [5]));
console.log(calculaIdade.call(pessoa2, 5));