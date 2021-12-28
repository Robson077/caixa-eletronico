let nomeDoProduto = document.getElementById("nome");

let valorDoProduto = document.getElementById("valor");

let listaNome = document.getElementById("listaNome")

let listaValor = document.getElementById("listaValor")

let troca = document.getElementById("resultado");

let bancoProdutos = []
let bancoValor = []

function mostrarProdutos() {
  novaLi = ""
  outraLi = ""
  bancoProdutos.forEach((produto, index) => {
    novaLi = novaLi + `
      <li>Nome: ${produto}</li>
    `
  })
  
  bancoValor.forEach((valor, inde) => {
    outraLi = outraLi + `
      <li>Valor: ${valor}</li>
    `
  })

  listaNome.innerHTML = novaLi
  listaValor.innerHTML = outraLi
}

function add() {
  bancoProdutos.push(String(nomeDoProduto.value))
  bancoValor.push(Number(valorDoProduto.value))

  nomeDoProduto.value = ""
  valorDoProduto.value = ""

  mostrarProdutos()
}


function fechar() {
  const total = bancoValor.reduce((total, valor) => total + valor, 0);

  troca.innerHTML = `Total: ${total.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`
}

function apagar() {
  while(bancoProdutos.length && bancoValor.length){
    bancoProdutos.pop()
    bancoValor.pop()
  }

  listaNome.innerHTML = ""
  listaValor.innerHTML = ""

  troca.innerHTML = "Compra deletada"
}

function addEnter(teclas) {
  if (teclas.key === "Enter"){
    add()
  }
}

document.addEventListener("keypress", addEnter)
