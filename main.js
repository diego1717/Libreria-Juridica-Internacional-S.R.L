const books = [
  {
    id: "intl-01",
    title: "Tratados y jurisdiccion transfronteriza",
    author: "Helena Vargas Mena",
    publisher: "Coleccion Internacional Juris",
    year: 2026,
    price: 64.9,
    compareAt: 71.4,
    category: "internacional",
    matter: "Derecho internacional",
    badge: "Nuevo",
    stock: "Disponible",
    tone: "brand",
    summary: "Competencia judicial, conflictos de leyes y ejecucion internacional en operaciones complejas.",
    tags: ["tratados", "litigio", "global"],
    featured: 1,
  },
  {
    id: "intl-02",
    title: "Arbitraje comercial contemporaneo",
    author: "Rafael Duarte Soler",
    publisher: "Foro Transnacional",
    year: 2026,
    price: 79.0,
    compareAt: 86.5,
    category: "internacional",
    matter: "Arbitraje",
    badge: "Importado",
    stock: "Por encargo",
    tone: "charcoal",
    summary: "Una obra para camaras arbitrales, firmas corporativas y asesoria de comercio global.",
    tags: ["arbitraje", "empresa", "contratos"],
    featured: 2,
  },
  {
    id: "corp-01",
    title: "Gobierno corporativo en mercados regulados",
    author: "Laura Casal Ferrer",
    publisher: "Editorial Consejo y Riesgo",
    year: 2026,
    price: 58.5,
    compareAt: 63.0,
    category: "corporativo",
    matter: "Corporativo",
    badge: "Destacado",
    stock: "Disponible",
    tone: "rose",
    summary: "Directorios, deberes fiduciarios y supervision interna para companias de alta exigencia regulatoria.",
    tags: ["board", "mercados", "societario"],
    featured: 3,
  },
  {
    id: "corp-02",
    title: "Compliance para grupos empresariales",
    author: "Andrea Lazo Quintero",
    publisher: "Cuadernos de Cumplimiento",
    year: 2025,
    price: 52.0,
    compareAt: 57.0,
    category: "corporativo",
    matter: "Compliance",
    badge: "Actualizado",
    stock: "Disponible",
    tone: "wine",
    summary: "Matrices de riesgo, controles internos y cultura de cumplimiento en operaciones regionales.",
    tags: ["compliance", "riesgo", "controles"],
    featured: 4,
  },
  {
    id: "proc-01",
    title: "Litigacion civil y estrategia probatoria",
    author: "Miguel A. Llerena",
    publisher: "Linea Practica Forense",
    year: 2026,
    price: 47.8,
    compareAt: 51.5,
    category: "procesal",
    matter: "Procesal",
    badge: "Nuevo",
    stock: "Disponible",
    tone: "brown",
    summary: "Preparacion del caso, construccion narrativa y prueba documental para audiencias exigentes.",
    tags: ["audiencias", "prueba", "litigio"],
    featured: 5,
  },
  {
    id: "proc-02",
    title: "Prueba digital en el proceso penal",
    author: "Ismael Cornejo Rios",
    publisher: "Taller de Investigacion Penal",
    year: 2026,
    price: 72.3,
    compareAt: 78.0,
    category: "procesal",
    matter: "Proceso penal",
    badge: "Tecnologia",
    stock: "Por encargo",
    tone: "plum",
    summary: "Pericia digital, custodia de evidencias y valoracion procesal de soportes tecnologicos.",
    tags: ["digital", "penal", "evidencia"],
    featured: 6,
  },
  {
    id: "tax-01",
    title: "Fiscalidad internacional aplicada",
    author: "Teresa Molina Vela",
    publisher: "Biblioteca Fiscal Global",
    year: 2026,
    price: 83.4,
    compareAt: 89.0,
    category: "tributario",
    matter: "Tributario",
    badge: "Premium",
    stock: "Disponible",
    tone: "brand",
    summary: "Planificacion, residencia fiscal y cumplimiento en grupos con operaciones multinivel.",
    tags: ["fiscal", "internacional", "empresa"],
    featured: 7,
  },
  {
    id: "tax-02",
    title: "Planeamiento tributario y riesgo regulatorio",
    author: "Felipe Santivañez",
    publisher: "Serie Analisis Fiscal",
    year: 2025,
    price: 61.2,
    compareAt: 66.0,
    category: "tributario",
    matter: "Riesgo regulatorio",
    badge: "Recomendado",
    stock: "Disponible",
    tone: "charcoal",
    summary: "Una lectura pensada para firmas, direcciones financieras y asesoria tributaria compleja.",
    tags: ["riesgo", "fiscal", "reorganizacion"],
    featured: 8,
  },
  {
    id: "pen-01",
    title: "Responsabilidad penal empresaria",
    author: "Camila Paredes Otero",
    publisher: "Coleccion Penal y Empresa",
    year: 2026,
    price: 55.6,
    compareAt: 60.0,
    category: "penal",
    matter: "Penal economico",
    badge: "Nuevo",
    stock: "Disponible",
    tone: "wine",
    summary: "Programas de prevencion, atribucion de responsabilidad y defensa corporativa actual.",
    tags: ["penal", "empresa", "compliance"],
    featured: 9,
  },
  {
    id: "pen-02",
    title: "Criminologia, castigo y politica publica",
    author: "Alonso Mederos Valez",
    publisher: "Debate Penal Contemporaneo",
    year: 2025,
    price: 39.9,
    compareAt: 43.5,
    category: "penal",
    matter: "Criminologia",
    badge: "Ensayo",
    stock: "Disponible",
    tone: "rose",
    summary: "Un texto de fondo para entender la relacion entre seguridad, populismo punitivo y politica criminal.",
    tags: ["criminologia", "politica", "justicia"],
    featured: 10,
  },
  {
    id: "pub-01",
    title: "Buena administracion y procedimiento actualizado",
    author: "Oscar Del Rio Cardenas",
    publisher: "Administracion Viva",
    year: 2026,
    price: 49.7,
    compareAt: 54.3,
    category: "corporativo",
    matter: "Administrativo",
    badge: "Sector publico",
    stock: "Disponible",
    tone: "brown",
    summary: "Dialogo administrativo, nuevas cargas procedimentales y estandares de servicio al ciudadano.",
    tags: ["administrativo", "procedimiento", "mediacion"],
    featured: 11,
  },
  {
    id: "tech-01",
    title: "Inteligencia artificial, datos y libertad individual",
    author: "Nora Escudero Plaza",
    publisher: "Editorial Derecho y Tecnologia",
    year: 2026,
    price: 68.2,
    compareAt: 74.0,
    category: "internacional",
    matter: "Tecnologia juridica",
    badge: "IA",
    stock: "Por encargo",
    tone: "plum",
    summary: "Privacidad, trazabilidad, automatizacion y riesgos regulatorios para operadores juridicos.",
    tags: ["ia", "privacidad", "datos"],
    featured: 12,
  },
];

const searchForm = document.querySelector("[data-search-form]");
const searchInput = document.querySelector("[data-search-input]");
const sortSelect = document.querySelector("[data-sort-select]");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const bookGrid = document.querySelector("[data-book-grid]");
const resultsCount = document.querySelector("[data-results-count]");
const noResults = document.querySelector("[data-no-results]");
const selectedList = document.querySelector("[data-selected-list]");
const selectedCount = document.querySelector("[data-selected-count]");
const selectedTotal = document.querySelector("[data-selected-total]");
const copyButton = document.querySelector("[data-copy-order]");
const clearButton = document.querySelector("[data-clear-order]");
const copyFeedback = document.querySelector("[data-copy-feedback]");
const orderBadge = document.querySelector("[data-order-badge]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

let activeFilter = "all";
let searchQuery = "";
let sortMode = "featured";
let selectedIds = [];
let feedbackTimer = null;

const currency = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

function formatCurrency(value) {
  return currency.format(value);
}

function getFilteredBooks() {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = books.filter((book) => {
    const matchesFilter = activeFilter === "all" || book.category === activeFilter;
    const haystack = [
      book.title,
      book.author,
      book.publisher,
      book.matter,
      book.summary,
      ...book.tags,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = normalizedQuery === "" || haystack.includes(normalizedQuery);
    return matchesFilter && matchesSearch;
  });

  const sorted = [...filtered];
  if (sortMode === "price-asc") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortMode === "price-desc") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortMode === "newest") {
    sorted.sort((a, b) => b.year - a.year || a.featured - b.featured);
  } else {
    sorted.sort((a, b) => a.featured - b.featured);
  }

  return sorted;
}

function updateFilterButtons() {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderBooks() {
  const visibleBooks = getFilteredBooks();
  resultsCount.textContent = String(visibleBooks.length);
  noResults.hidden = visibleBooks.length !== 0;
  bookGrid.hidden = visibleBooks.length === 0;

  bookGrid.innerHTML = visibleBooks
    .map((book) => {
      const isSelected = selectedIds.includes(book.id);

      return `
        <article class="book-card">
          <div class="book-cover book-cover--${book.tone}">
            <span class="book-matter">${book.matter}</span>
            <strong>${book.title}</strong>
          </div>
          <div class="book-body">
            <div class="book-topline">
              <span class="book-badge">${book.badge}</span>
              <span class="book-stock">${book.stock}</span>
            </div>
            <h3>${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <p class="book-publisher">${book.publisher} · ${book.year}</p>
            <p class="book-description">${book.summary}</p>
            <ul class="book-tags">
              ${book.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
            <div class="book-footer">
              <div class="book-price">
                <strong>${formatCurrency(book.price)}</strong>
                <span>${formatCurrency(book.compareAt)}</span>
              </div>
              <button type="button" class="book-button ${isSelected ? "is-selected" : ""}" data-add-book="${book.id}" aria-pressed="${String(isSelected)}">
                ${isSelected ? "Quitar" : "Anadir"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function getSelectedBooks() {
  return selectedIds
    .map((id) => books.find((book) => book.id === id))
    .filter(Boolean);
}

function renderSelectedList() {
  const selectedBooks = getSelectedBooks();
  const total = selectedBooks.reduce((sum, book) => sum + book.price, 0);

  selectedCount.textContent = String(selectedBooks.length);
  selectedTotal.textContent = formatCurrency(total);
  orderBadge.textContent = String(selectedBooks.length);
  copyButton.disabled = selectedBooks.length === 0;
  clearButton.disabled = selectedBooks.length === 0;

  if (selectedBooks.length === 0) {
    selectedList.innerHTML = '<li class="selected-empty">Aun no agregaste libros al pedido.</li>';
    return;
  }

  selectedList.innerHTML = selectedBooks
    .map(
      (book) => `
        <li class="selected-item">
          <div>
            <span class="selected-title">${book.title}</span>
            <span class="selected-meta">${book.author} · ${book.publisher}</span>
            <span class="selected-price">${formatCurrency(book.price)}</span>
          </div>
          <button type="button" class="selected-remove" data-remove-book="${book.id}" aria-label="Quitar ${book.title}">x</button>
        </li>
      `
    )
    .join("");
}

function setFeedback(message) {
  window.clearTimeout(feedbackTimer);
  copyFeedback.textContent = message;
  feedbackTimer = window.setTimeout(() => {
    copyFeedback.textContent = "";
  }, 2600);
}

function toggleSelectedBook(bookId) {
  if (selectedIds.includes(bookId)) {
    selectedIds = selectedIds.filter((id) => id !== bookId);
    setFeedback("Titulo quitado del pedido.");
  } else {
    selectedIds = [...selectedIds, bookId];
    setFeedback("Titulo agregado al pedido.");
  }

  renderBooks();
  renderSelectedList();
}

function removeSelectedBook(bookId) {
  selectedIds = selectedIds.filter((id) => id !== bookId);
  renderBooks();
  renderSelectedList();
  setFeedback("Titulo quitado del pedido.");
}

function clearSelectedBooks() {
  selectedIds = [];
  renderBooks();
  renderSelectedList();
  setFeedback("Lista de pedido vaciada.");
}

function buildOrderText() {
  const selectedBooks = getSelectedBooks();
  const total = selectedBooks.reduce((sum, book) => sum + book.price, 0);
  const lines = selectedBooks.map((book, index) => {
    return `${index + 1}. ${book.title} - ${book.author} - ${book.publisher} - ${formatCurrency(book.price)}`;
  });

  return [
    "Pedido base - Libreria Juridica Internacional",
    "",
    "Buenos dias, me interesa consultar disponibilidad y condiciones para los siguientes titulos:",
    "",
    ...lines,
    "",
    `Total referencial: ${formatCurrency(total)}`,
    "",
    "Quedo atento a stock, modalidad de entrega y formas de pago.",
  ].join("\n");
}

async function copyOrder() {
  const text = buildOrderText();

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "true");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      document.body.removeChild(helper);
    }

    setFeedback("Pedido copiado al portapapeles.");
  } catch (error) {
    setFeedback("No se pudo copiar automaticamente. Revisa permisos del navegador.");
  }
}

function observeSections() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visibleEntry.target.id}`);
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.15, 0.35, 0.6],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  renderBooks();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

sortSelect.addEventListener("change", (event) => {
  sortMode = event.target.value;
  renderBooks();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    updateFilterButtons();
    renderBooks();
  });
});

bookGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-book]");
  if (!addButton) {
    return;
  }

  toggleSelectedBook(addButton.dataset.addBook);
});

selectedList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-book]");
  if (!removeButton) {
    return;
  }

  removeSelectedBook(removeButton.dataset.removeBook);
});

copyButton.addEventListener("click", copyOrder);
clearButton.addEventListener("click", clearSelectedBooks);

updateFilterButtons();
renderBooks();
renderSelectedList();
observeSections();
