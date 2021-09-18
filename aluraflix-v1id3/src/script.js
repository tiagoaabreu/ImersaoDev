var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];

listaFilmes.push("Harry Potter");
listaFilmes.push("Harry Potter 4");
listaFilmes.push("Harry Potter 5");
listaFilmes.push("Harry Potter 6");

/* 
document.write("<p>" + listaFilmes[1] + "</p>");
document.write("<p>" + listaFilmes[2] + "</p>");
document.write("<p>" + listaFilmes[3] + "</p>");
*/
//   inicial.         condição.   expressao final.
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + indice + "</p>");
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
