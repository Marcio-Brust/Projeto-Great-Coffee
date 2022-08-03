const $ = document.querySelector.bind(document);
const btnMobile = $(".btn-mobile");
const footer = $(".rodape");
const eventos = ["click", "touchstart"];

function toggleMenu(event) {
  const nav = $(".nav");
  nav.classList.toggle("active");
  footer.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    btnMobile.innerHTML = '<img src="assets/img/menu-buguer-close.svg" alt>';
  } else {
    btnMobile.innerHTML = '<img src="assets/img/menu-buguer-open.svg" alt>';
  }
}

eventos.forEach((eventos) => {
  btnMobile.addEventListener(eventos, toggleMenu);
});
