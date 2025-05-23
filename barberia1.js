function reemplazarCaja() {
  const caja1 = document.getElementById("caja1");
  const caja2 = document.getElementById("caja2");

  caja1.style.display = "none";
  caja2.style.display = "block";
}

function confirmarReserva() {
  const caja2 = document.getElementById("caja2");
  const select = document.getElementById("horaSeleccionada");
  const hora = select.value;

  if (!hora || hora === "Horas disponibles") {
    alert("Por favor, selecciona una hora antes de reservar.");
    return;
  }

  // Limpiar contenido anterior y mostrar mensaje de confirmación
  caja2.innerHTML = "";
  const mensaje = document.createElement("h2");
  mensaje.textContent = `Perfecto! tu hora ha sido reservada a las ${hora}`;
  mensaje.style.color = "black";
  mensaje.style.fontSize = "24px";
  caja2.appendChild(mensaje);

  // Aplicar estilo de fondo y centrado
  caja2.style.backgroundColor = "white";
  caja2.style.color = "white";
  caja2.style.display = "flex";
  caja2.style.justifyContent = "center";
  caja2.style.alignItems = "center";
  caja2.style.height = "200px";
}