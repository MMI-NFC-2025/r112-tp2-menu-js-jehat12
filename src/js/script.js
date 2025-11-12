// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector(".menu");

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
  // Mise à jour des attributs ARIA pour accessibilité
  nav.ariaHidden = false;
  toggle.ariaExpended = true;
});