// Agregar reseña dinámica
document.getElementById('formResena').addEventListener('submit', function(e) {
  e.preventDefault();
  const nuevaResena = document.getElementById('nuevaResena').value;
  if (nuevaResena.trim()) {
      const p = document.createElement('p');
      p.textContent = nuevaResena;
      document.getElementById('resenas-lista').appendChild(p);
      document.getElementById('nuevaResena').value = '';
  }
});

// Vista previa de imágenes
document.getElementById('imagenSubida').addEventListener('change', function(e) {
  const contenedor = document.getElementById('vistaPrevia');
  contenedor.innerHTML = '';
  const archivo = e.target.files[0];
  if (archivo) {
      const reader = new FileReader();
      reader.onload = function(event) {
          const img = document.createElement('img');
          img.src = event.target.result;
          contenedor.appendChild(img);
      };
      reader.readAsDataURL(archivo);
  }
});

// Mostrar vistas
function mostrarVista(id) {
  document.getElementById("principal").classList.remove("mostrar");
  document.getElementById("vista-registro").classList.remove("mostrar");
  document.getElementById("vista-galeria").classList.remove("mostrar");

  setTimeout(() => {
      document.getElementById("principal").style.display = "none";
      document.getElementById("vista-registro").style.display = "none";
      document.getElementById("vista-galeria").style.display = "none";

      const vista = document.getElementById("vista-" + id);
      vista.style.display = "block";
      setTimeout(() => vista.classList.add("mostrar"), 10);
  }, 300);
}

function cerrarVista() {
  document.getElementById("vista-registro").classList.remove("mostrar");
  document.getElementById("vista-galeria").classList.remove("mostrar");

  setTimeout(() => {
      document.getElementById("vista-registro").style.display = "none";
      document.getElementById("vista-galeria").style.display = "none";
      document.getElementById("principal").style.display = "block";
      setTimeout(() => document.getElementById("principal").classList.add("mostrar"), 10);
  }, 300);
}

// Activar sección principal por defecto
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("principal").classList.add("mostrar");
});

// Animación de secciones al hacer scroll
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
      }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});