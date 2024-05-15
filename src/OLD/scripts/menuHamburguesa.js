document.addEventListener("astro:page-load", () => {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".hamburger").classList.toggle("expanded");
    document.querySelector(".nav-links").classList.toggle("expanded");
  });
});
