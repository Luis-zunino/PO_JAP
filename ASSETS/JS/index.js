//Menu laterla
$(document).ready(function () {
  $(".menu").click(function () {
    $(".keep").toggleClass("width");
  });
});

//Simulacion de HTMLs
document.getElementById("aside").addEventListener("click", (e) => {
  let listaDestinos = $(".cajaResultados");
  let mapa = $(".cajaMapaInteractivo");
  let agenda = $("#agendados");
  let r = e.target.classList;

  if (r.contains("amarillo") || r.contains("yellow")) {
    removerClases();

    listaDestinos.addClass("mostrar");
    mapa.addClass("ocultar");
    agenda.addClass("ocultar");
  } else if (r.contains("rojo") || r.contains("red")) {
    removerClases();

    listaDestinos.addClass("ocultar");
    mapa.addClass("mostrar");
    agenda.addClass("ocultar");
  } else if (r.contains("verde") || r.contains("green")) {
    removerClases();

    listaDestinos.addClass("ocultar");
    mapa.addClass("ocultar");
    agenda.addClass("mostrar");
  }

  function removerClases() {
    listaDestinos.removeClass("mostrar");
    mapa.removeClass("mostrar");
    agenda.removeClass("mostrar");
  }
});





document.getElementById("volver").addEventListener("click", volverResultados);
function volverResultados() {
  // let volver = document.getElementById("viajes");
  document.getElementById("viajes").innerHTML = "";
  cargarCardViajes(viajes);
}
