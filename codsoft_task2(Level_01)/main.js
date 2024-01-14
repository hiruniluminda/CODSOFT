const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const mixer = mixitup(".pro_grid");

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header
ScrollReveal().reveal(".head_image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".head_content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".head_content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".head_content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".head_content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// about
ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .sec_head", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_content h4", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about_btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// service
ScrollReveal().reveal(".service_card", {
  duration: 1000,
  interval: 500,
});

// blog
ScrollReveal().reveal(".blog_card", {
  ...scrollRevealOption,
  interval: 500,
});