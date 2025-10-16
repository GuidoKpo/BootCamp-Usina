const btnAgregar = document.getElementById("agregar");
const contenedor = document.getElementById("contenedor-actividades");

btnAgregar.addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const imagen = document.getElementById("imagen").value.trim();

  if (!titulo || !descripcion || !imagen) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("card-actividad");

  card.innerHTML = `
    <img src="${imagen}" alt="${titulo}">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
  `;

  contenedor.appendChild(card);

  // Limpiar inputs
  document.getElementById("titulo").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("imagen").value = "";
});
