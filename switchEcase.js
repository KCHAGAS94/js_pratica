
let aeroporto = "SP";

switch (aeroporto){
    case "RJ":
        console.log("Aeroporto do Rio de Janeiro");
        break;
    case "SP":
        console.log("Aeroporto de São Paulo");
        break;
    case "MG":
        console.log("Aeroporto de Minas Gerais");
        break; 
    default:
        console.log("Aeroporto desconhecido");
}

// 1️ Dia da semana

// Crie uma variável dia = 3.
// Use switch para imprimir:

// 1 → "Domingo"

// 2 → "Segunda"

// 3 → "Terça"

// ... até 7

// Qualquer outro número → "Dia inválido"

let dia = 4;

switch (dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

// 2️ Escolher operação matemática

// Crie duas variáveis a e b.
// Crie outra variável operacao com um desses valores: "soma", "subtracao", "multiplicacao", "divisao".

// Use switch para calcular a operação.

let a =10;
let b = 5;
let operacao = "subtracao";

switch (operacao){
    case "soma":
        console.log(a + b);
        break;
    case "subtracao":
        console.log(a - b);
        break;
    case "multiplicacao":
        console.log(a * b);
        break;
    case "divisao":
        console.log(a / b);
        break;
    default:
        console.log("Operação inválida");
}

// 3️ Classificação de nota

// Crie uma variável nota.
// Use switch para classificar:

// 10, 9 → "Excelente"

// 8, 7 → "Bom"

// 6, 5 → "Regular"

// 4, 3, 2, 1, 0 → "Ruim"

// Qualquer outro valor → "Nota inválida"

// (Dica: use switch(nota) e faça vários case seguidos)

let nota = 8;

switch (nota){
    case 10:
    case 9:
        console.log("Excelente");
        break;
    case 8:
    case 7:
        console.log("Bom");
        break;
    case 6:
    case 5:
        console.log("Regular");
        break;
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Ruim");
        break;
    default:
        console.log("Nota inválida");
}

// 4️ Menu de jogo

// Crie uma variável opcao com um número de 1 a 4:
// 1 → Iniciar jogo
// 2 → Carregar jogo
// 3 → Configurações
// 4 → Sair
// Qualquer outro → "Opção inválida"

// Use switch.

let opcao = 1;

switch (opcao){
    case 1:
        console.log("Iniciar jogo");
        break;
    case 2:
        console.log("Carregar jogo");
        break;
    case 3:
        console.log("Configurações");
        break;
    case 4:
        console.log("Sair");
        break;
    default:
        console.log("Opção inválida");
}

// 5️ Cores

// Crie uma variável cor com valores tipo: "vermelho", "azul", "verde", "preto".

// Use switch para imprimir uma frase:

// Ex.:
// "vermelho" → "Cor escolhida: Vermelho"
// Se não for nenhuma das acima → "Cor desconhecida"

let cor = "azul";
switch (cor){
    case "vermelho":
        console.log("Cor escolhida: Vermelho");
        break;
    case "azul":
        console.log("Cor escolhida: Azul");
        break;
    case "verde":
        console.log("Cor escolhida: Verde");
        break;
    case "preto":
        console.log("Cor escolhida: Preto");
        break;
    default:
        console.log("Cor desconhecida");
}

// 6️ Categoria de produto

// Crie variável produto:

// "celular" → categoria tecnologia

// "arroz" ou "feijão" → categoria alimentos

// "camiseta" → categoria roupas

// Outro → categoria desconhecida

// Use switch.

let produto = "camiseta";

switch (produto){
    case "celular":
        console.log("Categoria: Tecnologia");
        break;
    case "arroz":
    case "feijão":
        console.log("Categoria: Alimentos");
        break;
    case "camiseta":
        console.log("Categoria: Roupas");
        break;
    default:
        console.log("Categoria: Desconhecida");
}

// 7️ Tipo de usuário

// Crie uma variável tipoUsuario = "admin" ou "comum" ou "convidado".

// Use switch para imprimir:

// admin → "Acesso total"

// comum → "Acesso limitado"

// convidado → "Acesso básico"

// qualquer outro → "Usuário inválido"

let tipoUsuario = "admin";

switch (tipoUsuario){
    case "admin":
        console.log("Acesso total");
        break;
    case "comum":
        console.log("Acesso limitado");
        break;
    case "convidado":
        console.log("Acesso básico");
        break;
    default:
        console.log("Usuário inválido");
}