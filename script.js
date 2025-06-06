// Aquí puedes pegar tus enlaces de Imgur y los títulos/descripciones de tus proyectos
const projects = [
  {
    img: "https://i.imgur.com/abc123.jpg",
    title: "Clasificador de Imágenes con IA",
    description: "Proyecto con TensorFlow.js que detecta objetos usando la cámara del navegador."
  },
  {
    img: "https://i.imgur.com/def456.jpg",
    title: "Sistema de Control Escolar",
    description: "Aplicación para gestión de estudiantes usando Supabase, Node.js y React."
  },
  {
    img: "https://i.imgur.com/ghi789.jpg",
    title: "Web Personal Responsiva",
    description: "Página creada con HTML, CSS y JavaScript moderno, optimizada para móviles."
  }
  // Puedes agregar hasta 7 o más
];

const container = document.getElementById("projects");

projects.forEach(proj => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${proj.img}" alt="${proj.title}">
    <div class="card-content">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
    </div>
  `;
  container.appendChild(card);
});
