
function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    falar() {
      console.log(`Meu nome é ${this.nome}`);
    },
    suaidade() {
      console.log(`Minha idade é ${this.idade}`);
    },
    ano() {
      const dataAtual = new Date("2025-11-27"); 
      return dataAtual.getFullYear() - this.idade;
    }
  };
}

const p1 = criarPessoa("Ana", 25);
p1.falar();
p1.suaidade();
console.log("Ano de nascimento:", p1.ano());


function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    precoComDesconto: preco * 0.9
  };
}

const prod = criarProduto("TV", 2000);
console.log(prod);

function criarConta(saldoInicial) {
  let saldo = saldoInicial; // privado

  return {
    depositar(valor) {
      saldo += valor;
    },
    sacar(valor) {
      if (valor <= saldo) saldo -= valor;
      else console.log("Saldo insuficiente");
    },
    verSaldo() {
      return saldo;
    }
  };
}

const conta = criarConta(100);
conta.depositar(50);
console.log(conta.verSaldo()); // 150


function criarUsuario(opcoes) {
  return {
    nome: opcoes.nome,
    email: opcoes.email,
    admin: opcoes.admin || false
  };
}

const u = criarUsuario({
  nome: "Kenedy",
  email: "kenedy@gmail.com",
  admin: true
});

console.log(u);


function criarVeiculo(tipo) {
  if (tipo === "carro") {
    return { tipo: "carro", rodas: 4 };
  }
  if (tipo === "moto") {
    return { tipo: "moto", rodas: 2 };
  }
  return { tipo: "desconhecido" };
}

const v1 = criarVeiculo("carro");
const v2 = criarVeiculo("moto");

console.log(v1);
console.log(v2);
const v3 = criarVeiculo("bicicleta");
console.log(v3);

