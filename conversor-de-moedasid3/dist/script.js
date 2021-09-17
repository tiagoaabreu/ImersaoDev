function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElementoEuro = document.getElementById("valor2");
  var valor2 = valorElementoEuro.value;
  var valorEmRealNumerico = parseFloat(valor2);

  var valorEmReal = valorEmRealNumerico * 6;
  console.log(valorEmReal);

  var elementoRealConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoRealConvertido.innerHTML = valorConvertido;
}

function ConverterBitcoin() {
  var valorElementoReal = document.getElementById("bitcoin");
  var bitcoin = valorElementoReal.value;
  var valorEmBitcoin = parseFloat(bitcoin);

  var valorBitcoin = valorEmBitcoin / 0.000004;
  console.log(valorBitcoin);

  var elementoRealConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorBitcoin;
  elementoRealConvertido.innerHTML = valorConvertido;
}