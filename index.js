var i = 0;
var txt = 'Queridos Reyes Magos,'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function areYouSure() {
  if(document.getElementById("textoCambiante").innerHTML == "¿Aceptáis el acuerdo?"){
    document.getElementById("textoCambiante").innerHTML = "¿Estáis seguros?";
    document.getElementById("boton").value = "Estamos seguros";
  } else if(document.getElementById("boton").value == "¡QUE SÍ, PESADA!") {
    window.open("https://www.amazon.es/Yamaha-P-125B-Piano-digital-color/dp/B07BZTZC6R/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=yamaha+p125b&qid=1607075744&sr=8-1");
  } else {
    document.getElementById("textoCambiante").innerHTML = "¿De verdad de la buena?";
    document.getElementById("boton").value = "¡QUE SÍ, PESADA!";
  }
}

typeWriter();
