const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const bookCards = Array.from(document.querySelectorAll(".book-card"));
const addBookButtons = Array.from(document.querySelectorAll("[data-add-book]"));
const orderList = document.querySelector("[data-inquiry-list]");
const selectedCount = document.querySelector("[data-selected-count]");
const copyButton = document.querySelector("[data-copy-order]");
const clearButton = document.querySelector("[data-clear-order]");
const copyFeedback = document.querySelector("[data-copy-feedback]");
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

let activeFilter = "all";
let selectedBooks = [];
let feedbackTimer = null;

function setFeedback(message) {
  window.clearTimeout(feedbackTimer);
  copyFeedback.textContent = message;
  feedbackTimer = window.setTimeout(() => {
    copyFeedback.textContent = "";
  }, 2400);
}

function updateFilterState() {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  bookCards.forEach((card) => {
    const matches = activeFilter === "all" || card.dataset.category === activeFilter;
    card.hidden = !matches;
  });
}

function renderSelectedButtons() {
  addBookButtons.forEach((button) => {
    const card = button.closest(".book-card");
    const isSelected = selectedBooks.some((book) => book.title === card.dataset.title);
    button.classList.toggle("is-selected", isSelected);
    button.textContent = isSelected ? "Quitar" : "Seleccionar";
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderOrderList() {
  selectedCount.textContent = String(selectedBooks.length);
  copyButton.disabled = selectedBooks.length === 0;
  clearButton.disabled = selectedBooks.length === 0;

  if (selectedBooks.length === 0) {
    orderList.innerHTML = '<li class="inquiry-empty">Todavia no agregaste libros al pedido.</li>';
    renderSelectedButtons();
    return;
  }

  orderList.innerHTML = selectedBooks
    .map(
      (book) => `
        <li class="inquiry-item">
          <div>
            <strong>${book.title}</strong>
            <span>${book.edition}</span>
          </div>
          <button type="button" class="remove-book" data-remove-book="${book.title}" aria-label="Quitar ${book.title}">x</button>
        </li>
      `
    )
    .join("");

  renderSelectedButtons();
}

function toggleBookSelection(button) {
  const card = button.closest(".book-card");
  const title = card.dataset.title;
  const edition = card.dataset.edition;
  const existingIndex = selectedBooks.findIndex((book) => book.title === title);

  if (existingIndex >= 0) {
    selectedBooks.splice(existingIndex, 1);
    setFeedback("Titulo quitado del pedido.");
  } else {
    selectedBooks.push({ title, edition });
    setFeedback("Titulo agregado al pedido.");
  }

  renderOrderList();
}

function removeBook(title) {
  selectedBooks = selectedBooks.filter((book) => book.title !== title);
  renderOrderList();
  setFeedback("Titulo quitado del pedido.");
}

function buildOrderText() {
  const lines = selectedBooks.map((book, index) => `${index + 1}. ${book.title} (${book.edition})`);

  return [
    "Pedido base - Libreria Juridica Internacional",
    "",
    "Buenos dias, me interesa consultar disponibilidad y condiciones para los siguientes titulos:",
    "",
    ...lines,
    "",
    "Quedo atento a stock, modalidad de entrega y formas de pago.",
  ].join("\n");
}

async function copyOrderText() {
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

    setFeedback("Pedido base copiado.");
  } catch (error) {
    setFeedback("No se pudo copiar automaticamente. Revisa permisos del navegador.");
  }
}

function clearOrder() {
  selectedBooks = [];
  renderOrderList();
  setFeedback("Lista de pedido vaciada.");
}

function observeSections() {
  const sections = Array.from(document.querySelectorAll("main .section-anchor"));
  if (!sections.length || !("IntersectionObserver" in window)) {
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
      rootMargin: "-25% 0px -55% 0px",
      threshold: [0.15, 0.35, 0.6],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    updateFilterState();
  });
});

addBookButtons.forEach((button) => {
  button.addEventListener("click", () => toggleBookSelection(button));
});

orderList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-book]");
  if (!removeButton) {
    return;
  }

  removeBook(removeButton.dataset.removeBook);
});

copyButton.addEventListener("click", copyOrderText);
clearButton.addEventListener("click", clearOrder);

updateFilterState();
renderOrderList();
observeSections();
