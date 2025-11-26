
// FOR LOOP

// Estrutura básica de um loop for
// for (variavel; condição; incremento) 

for (i = 1; i <= 10; i++) {
    // console.log("O número é: " + i);
}

// 1️ Contar de 1 a 50

// Use um for para imprimir todos os números de 1 a 50.

for(i = 1; i <= 50; i++) {
    // console.log('Contando: ' + i);
}


// 2️ Contar números pares de 0 a 100

// Use for + if para imprimir somente os pares.

for(i = 0; i <= 19; i++) {
    if(i % 2 === 0) {
        // console.log('Número par: ' + i);
    }  
}


// 3️ Tabuada

// Peça um número (ex: let numero = 7)
// Use um for para imprimir a tabuada dele de 1 a 10.

let numero = 7;

for(i = 1; i <= 10; i++) {
    let resultado = numero * i;
    // console.log(numero + ' x ' + i + ' = ' + resultado);
}

// 4️ Somar todos os números de 1 a 100

// Use um for e uma variável acumuladora:

// let soma = 0;


// No final, mostre o valor total da soma.

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma = soma + i;
}

console.log("Soma total: " + soma);
