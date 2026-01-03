const palabra = "TE AMO";
const texto = document.getElementById("texto");
let index = 0;

function lanzarCorazon() {
  const corazon = document.createElement("div");
  corazon.className = "corazon";
  corazon.innerHTML = "❤️";
  corazon.style.left = "30%";
  corazon.style.bottom = "60px";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 1000);
}

function escribirLetra() {
  if (index < palabra.length) {
    lanzarCorazon();
    texto.innerHTML += palabra[index];
    index++;
    setTimeout(escribirLetra, 800);
  }
}

escribirLetra();
