

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const p1 = new Pessoa("Ana", 25);
console.log("Ela se chama: " + p1.nome);
console.log("Ela tem: " + p1.idade + " anos");

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  this.descontar = function (percentual) {
    return this.preco - (this.preco * percentual) / 100;
  };
}

const p = new Produto("TV", 2000, 10);
console.log(p.descontar(15));


