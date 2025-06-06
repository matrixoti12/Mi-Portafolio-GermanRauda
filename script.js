// Aquí puedes pegar tus enlaces de Imgur y los títulos/descripciones de tus proyectos
const projects = [
    {
      img: "https://i.imgur.com/nfDomup.png",
      title: "Chatbot creado con Ia con la api deeepseek",
      description: "Es un asistente virtual especializado en minería de datos y análisis estadístico, desarrollado principalmente en Python y utilizando Streamlit como framework web para su interfaz; además, integra APIs como OpenAI y Deepseek para potenciar sus capacidades mediante modelos de lenguaje avanzados",
      video: " https://i.imgur.com/diiyXr1.mp4",
      isYoutube: false
      
    },
    {
      img: "https://i.imgur.com/ZiHfbnN.png",
      title: "Sistema de toma de pedidos pupuseria",
      description: "Proyecto creado en 2023 con visual studio 2022 , con los lenguajes de programacionde C# y SQL server ",
      video: "https://youtu.be/V9r76ld4w-w",
      isYoutube: true
    },
    {
      images: [
        "https://i.imgur.com/GFhAnGo.jpeg",
        "https://i.imgur.com/CsX0ewB.jpeg",
        "https://i.imgur.com/Cn8Xhsm.jpeg",
      ],
      title: "Sistema web remasterizado censo",
      description: "Proyecto creado en el año 2024 con servidores flask y python y mysql server."
    },
    {
      images: [
        "https://i.imgur.com/Bnb5YjY.png", // Reemplaza con la URL de tu primera imagen
        "https://i.imgur.com/jvFhmnB.png", // Reemplaza con la URL de tu segunda imagen
        "https://i.imgur.com/JmqqvcA.png", // Reemplaza con la URL de tu tercera imagen
      ],
      title: "Registro de foto CDI 2024",
      description: "Desarrollé una aplicación web sencilla con HTML y CSS que optimizó significativamente el proceso de registro y organización fotográfica en el CDI. El sistema permitía ingresar el nombre del niño, su código y el nombre del tutor antes de capturar la fotografía, almacenando automáticamente los metadatos para una clasificación ordenada.\n\nGracias a esta solución, el equipo pasó de tardar hasta una semana en identificar, ubicar e imprimir más de 200 fotografías —proceso que anteriormente se hacía manualmente en documentos Word— a completar la misma tarea en un solo día. Fue una de las herramientas más simples que he creado, pero también una de las más útiles y con mayor impacto en la productividad del equipo.",
      video: "https://i.imgur.com/RWnA1HU.mp4", // Reemplaza con la URL de tu video
      isYoutube: false
    }
    // Puedes agregar hasta 7 o más
  ];
  
  const container = document.getElementById("projects");
  
  // Crear el modal para la vista a pantalla completa
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-content" id="modal-img">
  `;
  document.body.appendChild(modal);
  
  // Función para mostrar la imagen en el modal
  function showImageInModal(imgUrl) {
    const modalImg = document.getElementById("modal-img");
    modalImg.src = imgUrl;
    modal.style.display = "flex";
  }
  
  // Cerrar el modal cuando se hace clic en la X o fuera de la imagen
  modal.querySelector(".close-modal").onclick = function() {
    modal.style.display = "none";
  }
  
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  
  projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "card";
  
    if (proj.images) {
      // Si el proyecto tiene múltiples imágenes
      const imageGallery = document.createElement("div");
      imageGallery.className = "image-gallery";
      proj.images.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = proj.title;
        img.onclick = () => showImageInModal(imgUrl);
        imageGallery.appendChild(img);
      });
      card.appendChild(imageGallery);
    } else {
      // Si el proyecto tiene una sola imagen
      const img = document.createElement("img");
      img.src = proj.img;
      img.alt = proj.title;
      img.onclick = () => showImageInModal(proj.img);
      card.appendChild(img);
    }
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "card-content";
    contentDiv.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      ${proj.video ? (
        proj.isYoutube ? 
        `<a href="${proj.video}" target="_blank" class="video-link">Ver demostración en video</a>` :
        `<div class="video-container">
          <video controls>
            <source src="${proj.video}" type="video/mp4">
            Tu navegador no soporta el elemento de video.
          </video>
        </div>`
      ) : ''}
    `;
    card.appendChild(contentDiv);
    container.appendChild(card);
  });
  
