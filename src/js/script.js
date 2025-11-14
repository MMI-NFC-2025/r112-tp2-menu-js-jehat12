// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector(".menu");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
const isClosed = !isOpen;
console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
  // Mise à jour des attributs ARIA pour accessibilité
  nav.ariaHidden = isOpen;
  toggle.ariaExpanded = isClosed;
  document.body.classList.toggle("noscroll", isClosed);
});

// Collapsible menu functionality
document.querySelectorAll('.category').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const sub = document.querySelector(`.sub[data-owner="${target}"]`);
    if (!sub) return;
    sub.hidden = !sub.hidden;
  });
});
