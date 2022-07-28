# Orientação a Objetos - Santander Bootcamp Fullstack Developer

### Este repositório contém as atividades práticas propostas pela instrutora.

## Atividades: Conta Bancária

Nesta atividade, teve como intuito testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Foi criada a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
2. Dentro de `ContaBancaria`, foi construido o getter e o setter de `saldo`;
3. Dentro de `ContaBancaria`, foram criados os métodos `sacar` e `depositar`;
4. Logo após foi criada uma classe-filha chamada `ContaCorrente` que herdou todos esses parâmetros e ainda possui o parâmetro `cartaoCredito`;
5. Ainda em `ContaCorrente`, foi construido o getter e o setter de `cartaoCredito`;
6. Ainda em `ContaCorrente`, foi feito com que o `tipo` fosse 'conta corrente' por padrão;
7. Criada uma classe-filha chamada `ContaPoupanca` que herdou todos os parâmetros de `ContaBancaria`;
8. Criada uma classe-filha chamada `ContaUniversitaria` que herdou todos os parâmetros de `ContaBancaria`;
9. Foi feito com que o método `saque` de `ContaUniversitaria` apenas fosse capaz de sacar valores **menores que 500 reais**.

