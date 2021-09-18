var listaFilmes = ["https://pps.whatsapp.net/v/t61.24694-24/240330118_520023442666319_6973411067044219821_n.jpg?ccb=11-4&oh=284550c5e0c78ecaf59b3ec9db49895c&oe=614A4325",
"https://images-americanas.b2w.io/produtos/01/00/image/134414/0/134414014_1GG.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PWbTZ3jArSfVutpHvdu4441fBWJLYocuvg&usqp=CAU"];

function inserir ( ){
    var procura = document.querySelector("#procura");
    var inserir = procura.value;
    listaFilmes.push(inserir);
    var teste = listaFilmes[listaFilmes.length - 1];
    //document.getElementById("div").innerHTML ="<img src= "+listaFilmes;
    console.log(teste);
}



for (var i = 0;  i < listaFilmes.length;  i++) {
  document.write("<img src=" + listaFilmes[i]  +  ">")
  
}

//var procura = document.getElementById("procura").value
/* Desafios:
Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos...
Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while
Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente
Criar um campo e botão para adicionar a imagem pela tela, e não direto no código
*/




/* 
document.write("<p>" + listaFilmes[1] + "</p>");
document.write("<p>" + listaFilmes[2] + "</p>");
document.write("<p>" + listaFilmes[3] + "</p>");
*/
//   inicial.         condição.   expressao   final.


