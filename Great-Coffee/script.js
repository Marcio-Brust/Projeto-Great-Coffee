const $ = document.querySelector.bind(document);
const btnMobile = $(".btn-mobile");
const footer = $(".rodape");
const width = window.innerWidth;
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = $(".nav");
  nav.classList.toggle("active");
  footer.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    btnMobile.innerHTML =
      '<img src="/Great-Coffee/assets/img/menu-buguer-close.svg" alt>';
  } else {
    btnMobile.innerHTML =
      '<img src="/Great-Coffee/assets/img/menu-buguer-open.svg" alt>';
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
