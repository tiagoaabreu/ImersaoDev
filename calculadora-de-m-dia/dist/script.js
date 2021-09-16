var nome = "tiago"

var notaPrimeiroBimestre = 9.314

var notaSegundoBimestre = 7.13

var notaTerceiroBimestre = 4.23

var notaQuartoBimestre = 2

var test = "Hello";

var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)



document.getElementById("mytext").value = notaFixada;




console.log("Bem vindo "+ nome)
console.log(((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(1))

if (notaFixada < 6)
  console.log("Aluno reprovou")
else if (notaFixada > 5) 
  console.log("Aluno passou")