const burger = document.querySelector(".burger");
const nav = document.querySelector("header .container .nav ul.nav-links");
const navLinks = document.querySelectorAll("header .container .nav ul.nav-links li");
const sections = document.querySelectorAll("section");
console.log(sections);

function navSlide() {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
    // links animation fade
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navfade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
  });
}

// window.onscroll = () => {
//   var current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (scrollY >= sectionTop - 20) {
//       current = section.getAttribute("id");
//     }
//   });
//   navLinks.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       // console.log(current);
//       li.classList.add("active");
//     }
//   });
// };
navSlide();
