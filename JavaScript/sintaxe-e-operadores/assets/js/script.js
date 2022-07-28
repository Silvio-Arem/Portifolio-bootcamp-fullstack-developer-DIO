function comparaNumeros(n1, n2) {
    if (!n1 || !n2) return 'Defina dois números!';

    const fraseUm = criaFraseUm(n1, n2);
    const frasDois = criaFraseDois(n1, n2);

    return `${fraseUm} ${frasDois}`;
}

function criaFraseUm(n1, n2) {
    let saoIguais = '';

    if (n1 !== n2) {
        saoIguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`;
}

function criaFraseDois(n1, n2) {
    const soma = n1 + n2;

    let result10 = 'menor';
    let result20 = 'menor';

    const analisa10 = soma > 10;
    const analisa20 = soma > 20;

    if (analisa10) {
        result10 = 'maior';
    }

    if (analisa20) {
        result20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`;
}

console.log(comparaNumeros(1, 5)); 
/* adicione dois numeros dentro do parenteses, um antes da virgula e outro depois. Abra o console e digite "node script.js" dentro da pasta "js". */