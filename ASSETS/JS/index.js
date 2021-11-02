//Menu laterla
$(document).ready(function () {
  $(".menu").click(function () {
    $(".keep").toggleClass("width");
  });
});

//Simulacion de HTMLs
document.getElementById("aside").addEventListener("click", (e) => {
  let pagina1 = $(".paginaUno");
  let pagina2 = $(".paginaDos");
  let pagina3 = $(".paginaTres");
  let pagina4 = $(".paginaCuatro");
  let r = e.target.classList;

  if (r.contains("pagina1")) {
    removerClases();

    pagina1.addClass("mostrar");
    pagina2.addClass("ocultar");
    pagina3.addClass("ocultar");
    pagina4.addClass("ocultar");

  } else if (r.contains("pagina2")) {
    removerClases();

    pagina1.addClass("ocultar");
    pagina2.addClass("mostrar");
    pagina3.addClass("ocultar");
    pagina4.addClass("ocultar");

  } else if (r.contains("pagina3")) {
    removerClases();

    pagina1.addClass("ocultar");
    pagina2.addClass("ocultar");
    pagina3.addClass("mostrar");
    pagina4.addClass("ocultar");

  } else if (r.contains("pagina4")) {
    removerClases();

    pagina1.addClass("ocultar");
    pagina2.addClass("ocultar");
    pagina3.addClass("ocultar");
    pagina4.addClass("mostrar");

  }

  function removerClases() {
    pagina1.removeClass("mostrar");
    pagina2.removeClass("mostrar");
    pagina3.removeClass("mostrar");
    pagina4.removeClass("mostrar");

  }
});
