document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navMenu = document.querySelector(".nav-menu");

  hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
  });
});