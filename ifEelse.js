
//Exercicio 1
let numero1 = 110

if (numero1 > 100){
  console.log("Exercicio1: É maior que 100!");
} else {
  console.log("Exercicio1: É menor ou igual a 100!");
}

//Exercicio 2 
let cnh = "Não"

if (cnh == "Sim"){
  console.log("Execercicio2: Pode dirigir!")
} else{
  console.log("Execercicio2: Não pode dirigir!")
}

//Exercicio 3
let senhaCorreta = "1234"
let senhaDigitada = "1234"

if (senhaDigitada == senhaCorreta){
  console.log("Execercicio3: Senha correta!")
} else{
  console.log("Execercicio3: Senha incorreta!")
}


//Exercicio 4
let numero3 = 7

if (numero3 % 2 === 0){ //O resto da divisão
  console.log("Execercicio4: Número é par")
} else{
  console.log("Execercicio4: Número é impar!")
}

//Execercicio 5
let valor5 = 51

if (valor5 >= 50){
  console.log("O valor com desconto de 10% é: " + (valor5 - (valor5 * 0.10)))
} else{
  console.log("O valor sem desconto é: " + valor5)
}


//Execercicio 6
let temperatura = 29

if (temperatura > 30){
  console.log("Está muito quente")
} else if(temperatura >= 20){
  console.log("Está normal")
} else {
  console.log("Está frio.")
}

//Execercicio 7
let atual = "isso"
let substituto = "Execercicio 7: aquilo"
let novotexto = atual.replace ("isso", substituto)

console.log(novotexto)

// Exercícios Difíceis de If / Else

// 1️ Calculadora de salário com desconto progressivo

// Peça um valor de salário.
// Use if/else para aplicar as regras:

// Se salário < 1500 → desconto de 5%

// Se salário entre 1500 e 3000 → desconto de 10%

// Se salário > 3000 → desconto de 15%

// Mostre o salário final.

let salario = 2639;

if (salario < 1500){
    console.log(salario - (salario * 0.05));
} else if (salario >= 1500 && salario <= 3000){
    console.log(salario - (salario * 0.10));
} else {
    console.log(salario - (salario * 0.15));
}

// 2️ Classificador de IMC

// Crie duas variáveis: peso e altura.
// Calcule o IMC e classifique:

// < 18.5 → "Abaixo do peso"

// 18.5 a 24.9 → "Normal"

// 25 a 29.9 → "Sobrepeso"

// 30+ → "Obesidade"

let peso = 53;
let altura = 1.70;

let imc = peso / (altura * altura);

if (imc < 18.5){
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9){
    console.log("Normal");
} else if (imc >= 25 && imc <= 29.9){
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

// 4️ Sistema de notas com recuperação dupla

// Crie variáveis nota1 e nota2.
// Calcule a média.

// Média ≥ 7 → Aprovado

// Média entre 5 e 6.9 → Recuperação

// Média entre 3 e 4.9 → Recuperação pesada

// Média < 3 → Reprovado direto

let nota1 = 9;
let nota2 = 9;

let media = (nota1 + nota2) / 2;

if (media >= 7){
    console.log("Aprovado");
} else if (media >= 5 && media <= 6.9){
    console.log("Recuperação");
} else if (media >= 3 && media <= 4.9){
    console.log("Recuperação pesada");
} else {
    console.log("Reprovado direto");
}

// 5️ Calculadora de tarifa de viagem

// Crie variáveis:

// distancia

// horario → pode ser "dia" ou "noite"

// Regras:

// De dia, preço por km = 1.50

// De noite, preço por km = 2.00

// Se a distância for maior que 100 km → desconto total de 10%

// Use if/else aninhado.

let distancia = 120;
let horario = "dia";
let precoPorKm;
let precoTotal;

if (horario === "dia"){
    precoPorKm = 1.50;
} else if (horario === "noite"){
    precoPorKm = 2.00;
} else {
    console.log("Horário inválido");
}

precoTotal = distancia * precoPorKm;

if (distancia > 100){
    precoTotal = precoTotal - (precoTotal * 0.10);
} 

console.log("Preço total da viagem: " + precoTotal);

// 6️ Sistema de login com tentativas

// Crie variáveis:

// senhaDigitada

// senhaCorreta

// tentativas (número de tentativas já feitas)

// Regras:

// Se a senha estiver correta → "Acesso liberado"

// Se estiver errada e tentativas < 3 → "Senha incorreta, tente novamente"

// Se tentativas ≥ 3 → "Conta bloqueada"

let senhaCorreta2 = "senha124";
let senhaDigitada2 = "senha124";
let tentativas = 2; 

if (senhaDigitada2 === senhaCorreta2){
    console.log("Acesso liberado");
} else if (tentativas < 3){
        console.log("Senha incorreta, tente novamente");
} else {
        console.log("Conta bloqueada");
} 

// 7️ Classificador de idade completo

// Crie variável idade e classifique:

// 0 a 2 → bebê

// 3 a 12 → criança

// 13 a 17 → adolescente

// 18 a 59 → adulto

// 60+ → idoso

// Idade negativa → "Inválida"

let idade = 2;

if (idade >= 0 && idade <= 2){
    console.log("Bebê");
} else if (idade >= 3 && idade <= 12){
    console.log("Criança");
} else if (idade >= 13 && idade <= 17){
    console.log("Adolescente");
} else if (idade >= 18 && idade <= 59){
    console.log("Adulto");
} else if (idade >= 60){
    console.log("Idoso"); 
}

// 8️ Gerenciador de estoque

// Crie variáveis:

// estoque

// quantidadeSolicitada

// Regras:

// Se quantidadeSolicitada > estoque → "Estoque insuficiente"

// Se estoque ficar entre 1 e 5 depois da venda → "Atenção: estoque baixo"

// Se estoque se tornar 0 → "Produto esgotado"

// Caso contrário → "Venda efetuada com sucesso"

let estoque = 0;
let quantidadeSolicitada = 4;
if (quantidadeSolicitada > estoque){
    console.log("Estoque insuficiente");
} else {
    estoque -= quantidadeSolicitada;
    if (estoque === 0){
        console.log("Produto esgotado");
    } else if (estoque >= 1 && estoque <= 5){
        console.log("Atenção: estoque baixo");
    } else {
        console.log("Venda efetuada com sucesso");
    }
}

// 9️ Tempo de entrega

// Crie variáveis:

// distancia

// express (true ou false)

// Regras:

// Se express for true → tempo = distancia / 80

// Se express for false → tempo = distancia / 40

// Se distancia > 200 → some +2 horas extras ao tempo

// Mostre o tempo final.

let distancia2 = 150;
let express = false;
let tempo;  
if (express){
    tempo = distancia2 / 80;
} else {
    tempo = distancia2 / 40;
}

if (distancia2 > 200){
    tempo += 2;
}

console.log("Tempo final de entrega: " + tempo + " horas");