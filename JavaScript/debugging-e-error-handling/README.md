# Debugging e Error Handling - Santander Bootcamp Fullstack Developer

### Este repositório contém as atividades práticas propostas pela instrutora.

## Atividades: validação de erros por tipo

- Foi criada uma função que recebeu um array e um número
- Foram realizadas as seguintes validações:
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Foi utilizada a declaração `try...catch` a fim de tratar os erros.
- Foram filtradas as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`


