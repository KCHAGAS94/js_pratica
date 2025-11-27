
// 1️ Listar propriedades de um objeto

// Crie um objeto:

// let pessoa = {
//   nome: "Kenedy",
//   idade: 25,
//   cidade: "Santa Rita"
// };


// Use for...in para imprimir cada propriedade e seu valor.

let pessoa = {
    nome: "Kenedy",
    idade: 25,
    cidade: "Santa Rita"
}

for (let i in pessoa) {
    console.log(i + ": " + pessoa[i]);
}

// 2️ Contar quantas propriedades um objeto possui

// Dado:

// let produto = {
//   nome: "Celular",
//   preco: 1200,
//   estoque: 15,
//   cor: "preto"
// };


// Use for...in para contar quantas propriedades existem.

let produto = {
    nome: "Celular",
    preco: 1200,
    estoque: 15,
    cor: "preto",
    local: "Loja A",
}

let contador = 0;

for (let i in produto) {
    contador++;
}
console.log("Número de propriedades: " + contador);

// 3️ Somar valores dentro de um objeto

// Dado:

// let notas = {
//   prova1: 7,
//   prova2: 8,
//   prova3: 10
// };


// Some todas as notas usando for...in.

let notas = {
    prova1: 7,
    prova2: 8,
    prova3: 10,
}
let soma = 0;

for (let i in notas) {
    soma += notas[i];
}
console.log("Soma das notas: " + soma);

// 4️ Transformar um objeto em frases

// Dado:

// let carro = {
//   marca: "Fiat",
//   modelo: "Uno",
//   ano: 2015
// };


// Use for...in para imprimir frases do tipo:
// “marca: Fiat”, “modelo: Uno”, etc.

let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2015
}

for (let i in carro) {
    console.log(i + ": " + carro[i]);
}

// 5️ Mostrar apenas propriedades cujo valor seja número

// Dado:

// let dados = {
//   nome: "João",
//   idade: 20,
//   altura: 1.75,
//   cidade: "São Paulo"
// };


// Use for...in e imprima só as propriedades com valor numérico.

let dados = {
    nome: "João",
    idade: 20,
    altura: 1.75,
    cidade: "São Paulo"
}

for (let i in dados) {
    if (typeof dados[i] === 'number') {
        console.log(i + ": " + dados[i]);
    }
}

// ----------------------

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let j = 10; j >= 1; j--) {
    console.log(j);
}