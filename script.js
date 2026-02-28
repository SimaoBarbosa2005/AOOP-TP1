const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg"
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