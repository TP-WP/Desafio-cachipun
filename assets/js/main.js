//VARIABLES
var resultado = 0;
var contador_juegos = 1;
var contador_jugador = 0;
var contador_maquina = 0;
var juegos_totales = 0;
//JQuery
$(document).ready(function () {
  $("#video-win").hide();
});
//FUNCIONES

//se crea una funcion para generar la jugada de la maquina
function jugada_Pc() {
  var jugada_pc = Math.floor(Math.random() * 3);
  //se le asigna una jugada valida
  switch (jugada_pc) {
    case 0:
      jugada_pc = "papel";
      break;
    case 1:
      jugada_pc = "piedra";
      break;
    case 2:
      jugada_pc = "tijera";
      break;
  }
  return jugada_pc;
}

//se crea una funcion que compara dos jugadas y devuelve empate, o un ganador
function resultado_jugada(jugada_jugador, jugada_pc) {
  var ganador = "empate";
  if (jugada_jugador == jugada_pc) {
    ganador = "empate";
  } else if (jugada_jugador == "papel" && jugada_pc == "piedra") {
    ganador = "jugador";
  } else if (jugada_jugador == "piedra" && jugada_pc == "tijera") {
    ganador = "jugador";
  } else if (jugada_jugador == "tijera" && jugada_pc == "papel") {
    ganador = "jugador";
  } else {
    ganador = "maquina";
  }
  return ganador;
}

//captura cantidad de juegos del input
//esta funcion va en el boton en el html
function total_juegos() {
  var inputVal = document.getElementById("cantidad-de-juegos").value;
  return inputVal;
}

//funcion q escribe el total de los juegos
function escribe_total_juegos(juegos_totales) {
  document.getElementById("total_juegos").innerHTML =
    "Total juegos: " + juegos_totales;
}

//funcion para escribir el numero de juego actual
function juegoN(juego) {
  document.getElementById("juegoN").innerHTML = juego;
}

//funcion q escribe la cantidad de juegos y el juego inicial
//ademas inicializa las variables para que cada vez que uno seleccione
//el boton comenzar se inicie el juego denuevo
function comenzar() {
  juegos_totales = parseInt(total_juegos());
  escribe_total_juegos(juegos_totales);
  juegoN(1);
  resultado = 0;
  contador_juegos = 1;
  contador_jugador = 0;
  contador_maquina = 0;
  escribe_contadorJ(contador_jugador);
  escribe_contadorM(contador_maquina);
  $(".juego, .contadores").show();
  $("#video-win").hide();
}

//funcion para aumentar el contador de victorias del jugador
function escribe_contadorJ(numero) {
  document.getElementById("contador-jugador").innerHTML = numero;
}

//funcion para aumentar el contador de victorias de la maquina
function escribe_contadorM(numero) {
  document.getElementById("contador-maquina").innerHTML = numero;
}

//finalmente esta seria la main donde se realiza la mayor parte del juego
//esta funcion se llama al presionar cualquiera de los botones piedra, papel o tijera
function jugada_boton(jugada) {
  //primero se captura la jugada del jugador
  var jugada_jugador = 0;
  switch (jugada) {
    case "piedra":
      jugada_jugador = jugada;
      break;
    case "papel":
      jugada_jugador = jugada;
      break;
    case "tijera":
      jugada_jugador = jugada;
      break;
  }
  //se genera la jugada del pc y se almacena en una variable
  jugada_pc = jugada_Pc();
  //se comparan las dos jugadas y se captura el resultado en una variable
  resultado = resultado_jugada(jugada_jugador, jugada_pc);
  alert(`El jugador ha jugado: ${jugada_jugador}
Y la maquina ha jugado: ${jugada_pc}
El ganador es: ${resultado}
  `);
  //actualiza los contadores dependiendo del resultado
  if (resultado != "empate") {
    contador_juegos++;
    juegoN(contador_juegos);
  }
  if (resultado == "jugador") {
    contador_jugador++;
  }
  if (resultado == "maquina") {
    contador_maquina++;
  }
  escribe_contadorJ(contador_jugador);
  escribe_contadorM(contador_maquina);
  //cuando se determina un ganador del total de juegos
  //se muestra una divertida animacion
  if (contador_juegos == juegos_totales + 1) {
    $(".juego, .contadores").hide();
    $("#video-win").show();
    $("#video-win").get(0).play();
  }
}

//MAIN
//jugar(cantidadJuegos);
//nice job, have a nice day
