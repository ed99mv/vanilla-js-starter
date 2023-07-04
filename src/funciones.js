///Import´s
import { post } from "./API.js";
import { getTasks } from "./API.js";
import { deleteApi } from "./API.js";
///Variables
var contadorElemento = document.getElementById("contador");
var contador = 0;
var mensaje = "No hay tareas";
let btn = document.getElementById("btn");

///Funciones
document.addEventListener("DOMContentLoaded", function () {
  var agregarbtn = document.getElementById("btn");

  agregarbtn.addEventListener("submit", agregarDato);
});

function agregarDato() {
  var datoInput = document.getElementById("datoInput");

  var dato = datoInput.value;
  
  post(dato)
  getTasks(dato)
  
  if (dato.trim() !== "") {
    var tabla = document.getElementById("tablaDatos");
    var fila = tabla.insertRow(tabla.rows.length);
    var celda = fila.insertCell(0);
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    var eliminar = document.createElement("button");
    eliminar.textContent = "🗑";
    eliminar.id = "botonEli";

    let forma = document.createTextNode(dato);
    forma.textContent;

    celda.appendChild(forma);
    celda.appendChild(checkbox);
    celda.appendChild(eliminar);

    var tabla = document.getElementById("tablaDatos");
    mensaje = document.getElementById("mensaje");
    let filamensaje = document.getElementById("fila-mensaje");
    filamensaje.style.display = "none";
    datoInput.value = "";
  } else {
    return alert("Ingrese un texto");
  }
  console.log(tabla.rows.length);
  eliminar.addEventListener("click", function () {
    fila.remove();
    if (checkbox.checked) {
      // var contadorElemento = document.getElementById("contador")
      contador--;
      contadorElemento.innerHTML = contador;
    }

    if (tabla.rows.length === 1) {
      let filamensaje = document.getElementById("fila-mensaje");
      filamensaje.style.display = "block";
    }
  });
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      contador++;

      let contaditos = document.createTextNode(contador);

      let conta = document.getElementById("contador");

      conta.innerHTML = contaditos;
      checkbox.innerHTML = contador;
    } else {
      contador--;
    }
    contadorElemento.innerText = contador;
  });
}

document.getElementById("datoInput");
addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    agregarDato();
  }
});

export { agregarDato, btn };