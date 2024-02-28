
function pegarValorProduto () {
  return parseFloat(document.querySelector('#valor').value)
}

function calcularIcms (valorProduto) {
  return valorProduto * 0.18
}

function calcularTotal (valorProduto, icms) {
  let valor = valorProduto
  let icmsValor = icms
  let total = valor + icmsValor
  return total
}

document.querySelector('#btn').addEventListener('click', (event) => {
  event.preventDefault()

  const valorProduto = pegarValorProduto()
  const icms = calcularIcms(valorProduto)
  const total = calcularTotal(valorProduto, icms)

  document.querySelector('#mostrar').innerHTML = `O valor do ICMS é R$ ${icms.toFixed(2)} e o valor total do produto é R$ ${total.toFixed(2)}`

})