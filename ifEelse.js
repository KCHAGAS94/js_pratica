
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