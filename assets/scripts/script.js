// cotação da moeda no dia
const USD = 5.76 // Dólar
const EUR = 6.35 // Euro
const GBP = 6.92 // Libra Esterlina

// pegando os elementos que serão trabalhados no código
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// trata o input amount para receber apenas números
amount.addEventListener("input", (event) => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// trata o evento de submit(enviar) do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// função converter moeda
function convertCurrency(amount, price, symbol) {
  try {
    // exibe cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calcula o valor da conversão
    let total = amount * price

    // valida se total é de fato um número válido
    if (isNaN(total)) {
      return alert("Insira um número válido para coversão")
    }

    // formatar o valor para exibição
    total = formatCurrencyBRL(total).replace("R$", "")
    //let total = String(amount * price).replace('.', ',')

    // exibe o total
    result.textContent = `${total} Reais`

    // aplica a classe que mostra o resultado
    footer.classList.add("show-result")
  } catch (error) {
    // remove a classe que mostra o resultado
    footer.classList.remove("show-result")

    alert("Não foi possível fazer a coversão")
  }
}

// formata um valor recebido para um formato de moeda
function formatCurrencyBRL(value) {
  // primeiro converte para número para poder acessar o método toLocaleString
  // depois converte para moeda local
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
