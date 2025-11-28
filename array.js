
// Add valores em uma Array

let numeros = [7, 8, 9];

numeros.push(10, 11, 12);

numeros.unshift(1, 2, 3);

numeros.splice(3, 0, 4, 5, 6); 

console.log(numeros);

// Localizando elementos em uma Array

let numeros2 = [1, 2, 3, 1, 4, 5, 1];

console.log(numeros2.indexOf(3)); // Retorna o índice da primeira ocorrência do valor 1

console.log(numeros2.includes(3)); // Retorna true se o valor 3 estiver presente na array

// Localizando itens de referência

const movies = [
    {id: 1, title: 'O poderoso chefão'},
    {id: 2, title: 'O senhor dos anéis'},
    {id: 3, title: 'O hobbit'}
]

console.log(movies.find(function(movie) {
    return movie.title === 'O poderoso chefão';
}));

// Arrow function
console.log(movies.find(movie => movie.title === 'O poderoso chefão'));
console.log(movies.find(movie => movie.title === 'O senhor dos anéis'));
console.log(movies.find(movie => movie.title === 'O hobbit'));
console.log(movies.find(movie => movie.title === 'Avatar')); 

// Removendo elementos de uma Array

let numeros3 = [1, 2, 3, 4, 5];

let ultimo = numeros3.pop(); // Remove o último elemento
let primeiro = numeros3.shift(); // Remove o primeiro elemento
console.log(numeros3);
let meio = numeros3.splice(1, 2); // Remove elementos do meio (a partir do índice 1, remove 2 elementos)

console.log(ultimo);
console.log(primeiro);
console.log(meio);
console.log(numeros3);

// Esvaziando uma Array

let numeros4 = [1, 2, 3, 4, 5];

// numeros4 = []; 
// numeros4.length = 0;
numeros4.splice(0, numeros4.length); // Mais dinamico

console.log(numeros4); 


// Concatenando Arrays

let primeiroArray = [1, 2, 3];
let segundoArray = ["A", "B", "C"];

let concatenando = primeiroArray.concat(segundoArray);

console.log(concatenando);

// Cortando uma Array

let arrayCortada = concatenando.slice(2, 4 ); // Do índice 2 ao 4
console.log(arrayCortada);

// Join de Arrays

let clientes = ["Roger", "Ana", "Juliana", "Marcos"];
let juntando = clientes.join(" - ");
console.log(juntando);

// Ordenando Arrays

let numeros5 = [3, 1, 4, 2, 5];
numeros5.sort();
console.log(numeros5);

let frutas = ["Banana", "Uva", "Abacaxi", "Laranja"];
frutas.sort();
console.log(frutas);

// Verificando elementos em uma Array true ou false

let numeros6 = [1, 2, -4, 4, 5];
let todosMaiorQueZero = numeros6.every(function(value) {
    return value > 0;
});

console.log(todosMaiorQueZero); // true

 // Filtrando elementos de uma Array

let numeros7 = [1, 2, -4, 4, 5, -6, 7];

// const filtrando = numeros7.filter(function(value) {
//     return value > 0;
// });

// Com arrow function
const filtrando = numeros7.filter(value => value < 0);

console.log(filtrando); 