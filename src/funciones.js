///Import´s
import { deleteApi, post, get, updateTask } from "./API.js";

///Variables
var contadorElemento = document.getElementById("contador");
var contador = 0;
var mensaje = "No hay tareas";
let btn = document.getElementById("btn");

///Funciones

async function getTask() {
  let tareas = await get();
  let contadorAux = 0;
  tareas.forEach((tarea) => {
    crearVariableOmaiga(tarea.id, tarea.task, tarea.checked);
  });

  for (let index = 0; index < tareas.length; index++) {
    if (tareas[index].checked == true) {
      contadorAux++;
    }
  }
  contadorElemento.textContent = contadorAux;
  contador = contadorAux;
}

document.addEventListener("DOMContentLoaded", getTask);

function crearVariableOmaiga(id, dato, checked) {
  var tabla = document.getElementById("tablaDatos");
  var fila = tabla.insertRow(tabla.rows.length);
  var celda = fila.insertCell(0);
  fila.id = id;

  let forma = document.createTextNode(dato);
  forma.textContent;

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = checked;

  var eliminar = document.createElement("button");
  var tabla = document.getElementById("tablaDatos");
  eliminar.textContent = "🗑";
  eliminar.id = "botonEli";

  celda.appendChild(forma);
  celda.appendChild(checkbox);
  celda.appendChild(eliminar);

  let filamensaje = document.getElementById("fila-mensaje");
  filamensaje.style.display = "none";

  eliminar.addEventListener("click", function () {
    deleteApi(fila.id);
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
   
    let check = {
      checked: this.checked
    }

    updateTask(id, check);

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

async function agregarDato() {
  var datoInput = document.getElementById("datoInput");

  var dato = datoInput.value;

  if (dato.trim() !== "") {
    let task = {
      task: dato,
      checked: false,
    };

    let postResponse = await post(task);

    crearVariableOmaiga(postResponse.id, postResponse.task);

    mensaje = document.getElementById("mensaje");

    datoInput.value = "";
  } else {
    return alert("Ingrese un texto");
  }
}

document.getElementById("datoInput");
addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    agregarDato();
  }
});

export { agregarDato, btn };
