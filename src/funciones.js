///Import´s
import { deleteApi, post,get } from "./API.js";



function callback(orders) {
  

// agrear a la tabla

console.log(orders[3])



 
}


function Errores(error) {
 
   
}

get().then(callback).catch(Errores)


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

async function agregarDato() {
  var datoInput = document.getElementById("datoInput");

  var dato = datoInput.value;

  if (dato.trim() !== "") {
    var tabla = document.getElementById("tablaDatos");
    var fila = tabla.insertRow(tabla.rows.length);
    var celda = fila.insertCell(0);
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = false;

    var eliminar = document.createElement("button");
    eliminar.textContent = "🗑";
    eliminar.id = "botonEli";

    let forma = document.createTextNode(dato);
    forma.textContent;

    let task = {
      task: dato,
      checked: false,
    };

    let postResponse = await post(task);
    fila.id = postResponse.id;

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
