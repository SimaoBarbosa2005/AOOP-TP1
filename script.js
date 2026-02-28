const images = [
  {
    src: "images/image1.png",
    title: "Histogramas de Variáveis",
    tag: "Distribuição",
    category: "dist"
  },
  {
    src: "images/image2.png",
    title: "Distribuição Binomial — Sucesso de Resolução",
    tag: "Distribuição",
    category: "dist"
  },
  {
    src: "images/image3.png",
    title: "Heatmap de Correlação",
    tag: "Correlação",
    category: "stats"
  },
  {
    src: "images/image4.png",
    title: "Scatter Plot Matrix",
    tag: "Exploração",
    category: "stats"
  },
  {
    src: "images/image5.png",
    title: "Método do Cotovelo — Nº de Clusters",
    tag: "Clustering",
    category: "cluster"
  },
  {
    src: "images/image6.png",
    title: "PCA Projection dos Clusters",
    tag: "Clustering",
    category: "cluster"
  },
  {
    src: "images/image7.png",
    title: "Estatísticas de 1.º Nível",
    tag: "Estatística",
    category: "stats"
  },
  {
    src: "images/image8.png",
    title: "Teste de Normalidade",
    tag: "Inferência",
    category: "stats"
  },
  {
    src: "images/image9.png",
    title: "Distribuição de Poisson — Média vs Variância",
    tag: "Distribuição",
    category: "dist"
  },
  {
    src: "images/image10.png",
    title: "Resultado do Teste t-Student",
    tag: "Inferência",
    category: "stats"
  }
];

let currentFilter = "all";

function renderGallery(filter) {
  const gallery = document.getElementById("gallery");
  const filtered = filter === "all" ? images : images.filter(img => img.category === filter);

  gallery.innerHTML = "";

  if (filtered.length === 0) {
    gallery.innerHTML = `<div class="empty-state">◈ Nenhuma imagem para esta categoria</div>`;
    return;
  }

  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "img-card";
    card.style.animationDelay = `${index * 60}ms`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="card-overlay">
          <span class="card-overlay-icon">⤢</span>
        </div>
      </div>
      <div class="card-body">
        <span class="card-tag">${item.tag}</span>
        <div class="card-title">${item.title}</div>
        <div class="card-num">image${index + 1}.png</div>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(item.src, item.title));
    gallery.appendChild(card);
  });
}

function filterImages(category) {
  currentFilter = category;
  renderGallery(category);
}

function setActive(el) {
  document.querySelectorAll(".sidebar-nav li").forEach(li => li.classList.remove("active"));
  el.closest("li").classList.add("active");
}

function openLightbox(src, caption) {
  const lb = document.getElementById("lightbox");
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-caption").textContent = caption;
  lb.classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

window.onload = () => renderGallery("all");