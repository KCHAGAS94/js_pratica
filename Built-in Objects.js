
// 1️ Math

// Para cálculos matemáticos.

console.log(Math.PI);
console.log(Math.sqrt(16)); // raiz quadrada
console.log(Math.random()); // número aleatório
console.log(Math.max(10, 50, 3));
console.log(Math.min(10, 50, 3));

// 2️ Date

// Trabalha com datas e horas.

const agora = new Date();
console.log(agora.getFullYear());
console.log(agora.getMonth() + 1);
console.log(agora.getDate());
console.log(agora.getHours());
console.log(agora.getMinutes());
console.log(agora.getSeconds());

// 3️ String

// Funções especiais para mexer com texto.

let nome = "JavaScript";

console.log(nome.length); // Quantidade de caracteres
console.log(nome.toUpperCase()); // Tudo maiúsculo
console.log(nome.includes("Script")); // true ou false
console.log(nome.charAt(1)); // Pega o caractere do índice informado
console.log(nome.replace("Java", "Type")); // Substitui uma parte do texto

// 4️ Number

// Trabalha com números.

let x = 10.567;

console.log(Number.isInteger(x)); // Verifica se é um número inteiro
console.log(x.toFixed(2)); // Limita a quantidade de casas decimais
console.log(Number.parseFloat("15.99")); // Converte string para número decimal
console.log(Number.parseInt("20")); // Converte string para número inteiro

// 5️ Array

// Listas e funções poderosas para manipular dados.

let lista = ["a", "b", "c"];

console.log(lista.length);
console.log(lista.join(" - "));
console.log(lista.indexOf("b"));

// 6️ Object

// Base de tudo no JS.

const pessoa = { nome: "Ana", idade: 25 };

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); // Matriz de chaves e valores