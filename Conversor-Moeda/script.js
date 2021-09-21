var chkReal = document.getElementById("ValorReal")
var chkEuro = document.getElementById("ValorEuro")


function valorReal(){
     var campoTexto = parseFloat(document.getElementById("texto").value)
      var resultado = campoTexto * 5
      var valorConvertido = document.getElementById("teste")
      var titulo = "o valor é em real é " + resultado + " R$"

      valorConvertido.innerHTML = titulo
}

function valorEuro(){
  var campoTexto = parseFloat(document.getElementById("texto").value)
  var resultado = campoTexto * 1.20
  var valorConvertido = document.getElementById("teste")
  var titulo = "o valor em euro é " + resultado + "Euros"

  valorConvertido.innerHTML = titulo
}




function Converter(){
    if(chkReal.checked) {
      valorReal()
    }
   if(chkEuro.checked){
     valorEuro()
   }
   if(chkEuro.checked = false){
      if(chkReal.checked){
        var checagem = document.getElementById("texto").value
        if(checagem ==""){
          var texto = document.getElementById("texto_erro")
          texto.innerHTML = "Insira um valor"
        }
      }
   }
}



