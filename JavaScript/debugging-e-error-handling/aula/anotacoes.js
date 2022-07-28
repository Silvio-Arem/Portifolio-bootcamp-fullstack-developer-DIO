/* ECMAScript Error:

Erros que ocorrem em tempo de execução.
Composto por:
- Mensagem;
- Nome;
- Linha;
- Call Stack; */

// ---------------------------------------------------------------------------------

/* DOMException:

Erros relacionados ao Documeent Object Model (DOM).
Erros na estrutura dentro dos elementos da pagina da web */

// ---------------------------------------------------------------------------------

/* Tratativas de erros: Throw, Try...catch e Finally */

/* "Throw" tem o mesmo sentido de utilizar o return em uma função no caso de erro por exemplo, porém é uma tratativa que ao invés de mostrar apenas a mensagem orientativa ele vai mostrar um erro "Uncaught" + orientação. */


/* "Try... catch" é outra forma de tratativa de erro onde podemos mostrar de outra forma o porque de estar dando erro o seu preenchimento. */

/* "Finally" é uma opção de verificação que se estende do "Try...catch", onde se o usuário digitar o valor correto vai aparecer "TRUE", já se o valor passado for incorreto, a mensagem passada no finally aparecerá, a fim de ajudar o usuário. */

// ---------------------------------------------------------------------------------

/* Objeto Error:
Trata-se de um objeto existente ja na documentação do JavaScript, onde pode ser utilizado para facilitar o processo de inclusão de erro criando-o e chamando-o quando necessário.

Sua sintaxe é a seguinte: */

new Error(message, fileName, lineNumber)
// todos os parâmetros acima são opcionais.

const MeuErro = new Error('Mensagem Inválida'); //criando.
MeuErro.name = 'InvalidMessage'; //nomeando o erro criando a propriedade ".name".
throw MeuErro; //chamando.


