const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
  "images/image5.png",
  "images/image6.png"
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