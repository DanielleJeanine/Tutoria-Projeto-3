//1. Declaração e concatenação

const fisrtName = "Maria";
const lastName = "Silva";
const fullName = fisrtName + " " + lastName;
console.log("Nome completo: " + fullName);

//2. Template strings (ES6)
const greeting = `Olá, meu nome é ${fisrtName} ${lastName}`;
console.log(greeting);

//3. Propriedades e métodos de string
console.log("Comprimento do nome completo: ", fullName.length);
console.log("Nome em maiúsculas: ", fullName.toUpperCase());
console.log("Nome em minúsculas: ", fullName.toLowerCase());


