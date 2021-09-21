// Desafios:
//    Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, mangás, cursos, capas de jogos etc. | COMPLETO
//    Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while. | INCOMPLETO
//    Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente. | COMPLETO
//    Criar um campo e botão para adicionar a imagem pela tela, e não direto no código. | COMPLETO
var listaAnimes = [
  "https://br.web.img3.acsta.net/c_310_420/pictures/16/04/11/16/56/089875.jpg",
  "https://animefire.net/img/animes/boku-no-hero-academia-3rd-season-large.webp?v=1",
  "https://media.fstatic.com/5LLGwdvV-N_tZvBOJNndr0K3xIU=/290x478/smart/media/movies/covers/2016/12/y.jpg"
];
var textoNovo = document.getElementById("novoAnime");

for (var i = 0; i < listaAnimes.length; i++) {
  var iAnimes = "<img src=" + listaAnimes[i] + ">";
  var iListaAnimes = document.getElementById("filmes");
  // document.write
  iListaAnimes.innerHTML = iListaAnimes.innerHTML + iAnimes;
}

function Adicionar() {
  var urlImagem = document.getElementById("url").value;
  if (listaAnimes.includes(urlImagem)) {
    textoNovo.innerHTML = "Esse link já foi adicionado!";
  } else if (urlImagem == "") {
    textoNovo.innerHTML = "Nenhum link foi inserido.";
  } else {
    listaAnimes.push(urlImagem);
    var ultimo = listaAnimes[listaAnimes.length - 1];
    listarFilmesNaTela(urlImagem);
    textoNovo.innerHTML = "Foi adicionado o link da imagem.";
  }
  document.getElementById("url").value = "";
}

function listarFilmesNaTela(urlImagem) {
  var elementoFilme = "<img src=" + urlImagem + ">";
  var elementoListaFilmes = document.getElementById("filmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;
}