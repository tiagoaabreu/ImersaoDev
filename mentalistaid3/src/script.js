var numeroSecreto = parseInt(Math.random() * 11);
var quantidadeChute = 3;
var btn = document.querySelector("#refresh");
btn.addEventListener("click", function () {
  document.location.reload;
});
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  if (quantidadeChute == 0) {
    elementoResultado.innerHTML =
      "Acabaram as tentativas,a resposta era " + numeroSecreto;
  } else {
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Acertou";
    } else {
      elementoResultado.innerHTML =
        "numero de tentativas restantes: " + --quantidadeChute;
    }
    if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Numero entre 0 e 10";
    }
  }
  if (chute < numeroSecreto) {
    alert("Numero secreto um pouco mais alto");
  } else if (chute > numeroSecreto) {
    alert("Numero secreto um pouco menor");
  }
}
