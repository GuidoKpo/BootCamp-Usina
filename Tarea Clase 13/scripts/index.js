import { Repository } from "./repository.js";
import { Activity } from "./activity.js";

// Crear instancia del repositorio
const repo = new Repository();

// Función para convertir una actividad en tarjeta HTML
function activityToHtml(activity) {
  const { title, description, imgUrl, id } = activity;

  const card = document.createElement("div");
  card.classList.add("card-actividad");

  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = title;

  const h3 = document.createElement("h3");
  h3.innerHTML = title;

  const p = document.createElement("p");
  p.innerHTML = description;

  // Botón eliminar (extra credit)
  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "Eliminar";
  btnDelete.addEventListener("click", () => {
    repo.deleteActivity(id);
    renderActivities();
  });

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(btnDelete);

  return card;
}

// Función para renderizar todas las actividades
function renderActivities() {
  const contenedor = document.getElementById("contenedor-actividades");
  contenedor.innerHTML = "";

  const allActivities = repo.getAllActivities();
  const cards = allActivities.map(activityToHtml);

  cards.forEach(card => contenedor.appendChild(card));
}

// Función handler para agregar actividad
function handleAddActivity() {
  const titleInput = document.getElementById("titulo");
  const descriptionInput = document.getElementById("descripcion");
  const imgInput = document.getElementById("imagen");

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const imgUrl = imgInput.value.trim();

  if (!title || !description || !imgUrl) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const id = Date.now();
  const activity = new Activity(id, title, description, imgUrl);
  repo.createActivity(id, title, description, imgUrl);

  titleInput.value = "";
  descriptionInput.value = "";
  imgInput.value = "";

  renderActivities();
}

// Event listener del botón
const btnAgregar = document.getElementById("agregar");
btnAgregar.addEventListener("click", handleAddActivity);

// Render inicial (por si hubiera actividades previas)
renderActivities();
