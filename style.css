:root {
    --bg-color: #0a0a0a;
    --card-bg: #1a1a1a;
    --primary: #00ffd1;
    --text-color: #eaeaea;
    --accent: #00c3ff;
    --secondary: #2a2a2a;
    --gradient: linear-gradient(135deg, var(--primary), var(--accent));
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
  }
  .container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
    padding: 2rem 0;
  }
  header {
    background: var(--gradient);
    padding: 3rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  header .container {
    position: relative;
    z-index: 2;
  }
  header h1 {
    font-size: 3.5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    margin-bottom: 1rem;
  }
  header p {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.9);
    max-width: 600px;
    margin: 0 auto;
  }
  h2 {
    font-size: 2.5rem;
    margin: 2rem 0;
    color: var(--accent);
    text-align: center;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
  }
  .card {
    background-color: var(--card-bg);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(255,255,255,0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,255,209,0.2);
  }
  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .card-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .card-content h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
  .card-content p {
    font-size: 1rem;
    color: #ccc;
    line-height: 1.7;
    margin-bottom: 1rem;
    flex: 1;
  }
  footer {
    background-color: var(--secondary);
    text-align: center;
    padding: 2rem;
    color: #888;
    font-size: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  /* Nuevos estilos para el enlace del video */
  .video-link {
    display: inline-block;
    margin-top: auto;
    padding: 0.8rem 1.5rem;
    background-color: var(--primary);
    color: var(--bg-color);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    text-align: center;
  }

  .video-link:hover {
    background-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,255,209,0.3);
  }

  .image-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .image-gallery img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .image-gallery img:hover {
    transform: scale(1.05);
  }

  /* Estilos para el modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
  }

  .close-modal {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
  }

  .close-modal:hover {
    color: var(--primary);
  }

  /* Estilos para las imágenes en la galería */
  .image-gallery img {
    cursor: pointer;
  }

  /* Animación para el modal */
  .modal-content {
    animation: zoom 0.3s ease-in-out;
  }

  @keyframes zoom {
    from {transform: scale(0.1)}
    to {transform: scale(1)}
  }

  .video-container {
    margin-top: auto;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    padding-top: 56.25%; /* Aspect ratio 16:9 */
  }

  .video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  /* Ajuste para la descripción larga */
  .card-content p {
    white-space: pre-line;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  /* Setup Section */
  .setup-section {
    background-color: var(--secondary);
    padding: 4rem 0;
  }

  .setup-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .setup-text h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  .setup-text p {
    font-size: 1.1rem;
    color: var(--text-color);
  }

  .setup-image img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
  }

  .setup-image img:hover {
    transform: scale(1.02);
  }

  /* Reflection Section */
  .reflection-section {
    background-color: var(--bg-color);
    padding: 4rem 0;
  }

  .reflection-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
  }

  .reflection-content h2 {
    font-size: 2.5rem;
    color: var(--accent);
    margin-bottom: 2rem;
  }

  blockquote {
    font-size: 1.5rem;
    color: var(--primary);
    font-style: italic;
    margin: 2rem 0;
    padding: 2rem;
    border-left: 4px solid var(--primary);
    background-color: var(--secondary);
    border-radius: 0 15px 15px 0;
  }

  cite {
    display: block;
    font-size: 1rem;
    color: var(--accent);
    margin-top: 1rem;
  }

  .reflection-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-color);
    margin-top: 2rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .setup-content {
      grid-template-columns: 1fr;
    }
    
    header h1 {
      font-size: 2.5rem;
    }
    
    .reflection-content h2,
    .setup-text h2 {
      font-size: 2rem;
    }
    
    blockquote {
      font-size: 1.2rem;
    }
  }

  /* Personal Info Section */
  .personal-info {
    background-color: var(--bg-color);
    padding: 4rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .personal-content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    align-items: start;
  }

  .profile-image {
    position: relative;
  }

  .profile-image img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border: 3px solid var(--primary);
    transition: transform 0.3s ease;
  }

  .profile-image img:hover {
    transform: scale(1.02);
  }

  .profile-info {
    padding: 1rem;
  }

  .profile-info h2 {
    color: var(--primary);
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .info-item {
    background-color: var(--secondary);
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .info-item .label {
    display: block;
    color: var(--accent);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .info-item .value {
    color: var(--text-color);
    font-size: 1.1rem;
  }

  .academic-info {
    margin-top: 2rem;
  }

  .academic-info h3 {
    color: var(--accent);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    .personal-content {
      grid-template-columns: 1fr;
    }
    
    .profile-image {
      max-width: 300px;
      margin: 0 auto;
    }
    
    .profile-info h2 {
      text-align: center;
    }
    
    .info-grid {
      grid-template-columns: 1fr;
    }
  }

  .projects-info {
    background-color: var(--secondary);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    border: 1px solid rgba(255,255,255,0.1);
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .projects-info p {
    color: var(--text-color);
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0;
  }

  .projects-info p::before {
    content: '��';
    margin-right: 0.5rem;
  }
