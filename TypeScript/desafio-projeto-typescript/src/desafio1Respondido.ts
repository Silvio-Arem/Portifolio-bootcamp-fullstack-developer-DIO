//Desafio 1:
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/* 
let employee = {};
employee.code = 10;
employee.name = "John";  */


//Resposta 1:
const employee = {
    code: 10,
    name: 'John'
};

//Resposta 2:
const employee1: {code: number, name: string} = {
    code:10,
    name: 'John'
}

//Resposta 3:
interface employee {
    code: number,
    name: string
};

const employee3: employee = {
    code: 10,
    name: 'John'
}

//Resposta 4:
const employee4 = {} as employee;
employee4.code = 10;
employee4.name = 'John';