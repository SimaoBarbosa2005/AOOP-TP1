const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

function showImages() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // limpa o container

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}

// Mostrar imagens ao carregar a página
window.onload = showImages;