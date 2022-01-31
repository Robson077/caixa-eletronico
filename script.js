let nomeDoProduto = document.getElementById("nome");

let valorDoProduto = document.getElementById("valor");

let listaNome = document.getElementById("listaNome");

let listaValor = document.getElementById("listaValor");

let troca = document.getElementById("resultado");

let arrayProdutos = [];
let arrayValor = [];

function mostrarProdutos() {
  novaLi = "";
  outraLi = "";
  arrayProdutos.forEach((produto, index) => {
    novaLi =
      novaLi +
      `
      <li>Nome: ${produto}</li>
    `;
  });

  arrayValor.forEach((valor, index) => {
    outraLi =
      outraLi +
      `
      <li>Valor: ${valor} <i class="fas fa-trash" onclick="apagarIndex(${index})"></i></li>
    `;
  });

  listaNome.innerHTML = novaLi;
  listaValor.innerHTML = outraLi;
}

function add() {
  if (nomeDoProduto.value && valorDoProduto.value) {
    arrayProdutos.push(String(nomeDoProduto.value));
    arrayValor.push(Number(valorDoProduto.value));
    mostrarProdutos();
  } else {
    alert("PREENCHA TODOS OS CAMPOS!!");
  }

  nomeDoProduto.value = "";
  valorDoProduto.value = "";

  troca.innerHTML = "";
}

function fechar() {
  const total = arrayValor.reduce((total, valor) => total + valor, 0);

  troca.innerHTML = `Total: ${total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`;
}

function apagar() {
  while (arrayProdutos.length && arrayValor.length) {
    arrayProdutos.pop();
    arrayValor.pop();
  }

  listaNome.innerHTML = "";
  listaValor.innerHTML = "";

  troca.innerHTML = "Compra deletada";
}

function apagarIndex(index) {
  arrayProdutos.splice(index, 1);
  arrayValor.splice(index, 1);
  fechar()

  mostrarProdutos();
}

function addEnter(teclas) {
  if (teclas.key === "Enter") {
    add();
  }
}

document.addEventListener("keypress", addEnter);
