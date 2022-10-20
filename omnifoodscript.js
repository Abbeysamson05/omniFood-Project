"use strict";
console.log("Its raining since morning!");
// const heroLink = document.querySelector(".hero-link");
// const section1 = document.getElementById("how");
// heroLink.addEventListener("click", function (e) {
//   e.preventDefault();
//   // const s1cord = section1.getBoundingClientRect();
//   // console.log(s1cord, s1cord.top);
//   // window.scrollTo({
//   //   left: s1cord.left + window.pageXOffset,
//   //   top: s1cord.top + window.pageYOffset,
//   //   behavior: "smooth",
//   // });
//   //THE MODERN WAY OF ACTIVATING THE SCROLL EFFECT
//   section1.scrollIntoView({ behavior: "smooth" });
// });
const mealLink = document.querySelectorAll(".hero-link1");
const sectionMeals = document.getElementById("meals");
const sectionPricing = document.getElementById("pricing");
mealLink.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.preventDefault();
    // const id = this.getAttribute("href");
    // document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    sectionMeals.scrollIntoView({ behavior: "smooth" });
  })
);
const pricingLink = document.querySelector(".hero-link2");
pricingLink.addEventListener("click", function (e) {
  e.preventDefault();
  sectionPricing.scrollIntoView({ behavior: "smooth" });
});
// const navs = document.querySelectorAll(".hero-link");
// navs.forEach((nav) => {
//   nav.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });
// USING EVENT DELEGATION TO ACHIEVE THE ABOVE
const navs = document.querySelector(".hero-links");
navs.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("hero-link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
const heros = document.querySelector(".logo-nav");
//ALLOWING THE OTHER LINKS VISIBILITY TO BE VISIBLE WHEN WE HOVER ON AN INDIVIDUAL LINK METHOD 1
// const handleOver = function (e, opacity) {
//   if (e.target.classList.contains("hero-link")) {
//     const link = e.target;
//     const siblings = link.closest(".logo-nav").querySelectorAll(".hero-link");
//     const logo = link.closest(".logo-nav").querySelector("img");
//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = opacity;
//     });
//     logo.style.opacity = opacity;
//   }
// };
// heros.addEventListener("mouseover", function (e) {
//   handleOver(e, 0.5);
// });
// heros.addEventListener("mouseout", function (e) {
//   handleOver(e, 1);
// });
//SECOND METHOD FOR REDUCING VISIBILITY
const handleOver = function (e, opacity) {
  if (e.target.classList.contains("hero-link")) {
    const link = e.target;
    const siblings = link.closest(".logo-nav").querySelectorAll(".hero-link");
    const logo = link.closest(".logo-nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
heros.addEventListener("mouseover", handleOver.bind(0.5));
heros.addEventListener("mouseout", handleOver.bind(1));
console.log(document.querySelector(".hero-link1").getAttribute("href"));
//STICKY NAVIGATION
//FIRST METHOD
const sectionLogo = document.querySelector(".logos");
// const s1cord = sectionLogo.getBoundingClientRect();
// // console.log(s1cord.top);
// window.addEventListener("scroll", function (e) {
//   // console.log(scrollY);
//   // console.log(s1cord);
//   if (scrollY > s1cord.top) heros.classList.add("sticky");
//   else heros.classList.remove("sticky");
// });
//SECOND METHOD FOR THE STICKY NAVIGATION USING THE INTERSECTIONOBSERVEAPI METHOD
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     // console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.6],
// };
// const headerObserve = new IntersectionObserver(obsCallback, obsOptions);
// headerObserve.observe(sectionLogo);
const hero = document.querySelector(".hero");
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) heros.classList.add("sticky");
  else heros.classList.remove("sticky");
};
const logoObserve = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
logoObserve.observe(hero);
//DISAPPEARING SECTTIONS USING THE INTERSECTIONOBSERVER TO FIX THAT SHIT
// window.addEventListener("scroll", function (e) {
//   console.log(e);
// });
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});
const allSection = document.querySelectorAll(".section");
allSection.forEach(function (section) {
  section.classList.add("hidden");
  console.log(section);
  sectionObserver.observe(section);
});

const menuicon = document.querySelector(".nav-icon-1");
const closeicon = document.querySelector(".nav-icon-2");
menuicon.addEventListener("click", function () {
  console.log("Menu clicked!");
  menuicon.style.display = "none";
  closeicon.style.display = "block";
});
closeicon.addEventListener("click", function () {
  console.log("Close clicked!");
  menuicon.style.display = "block";
  closeicon.style.display = "none";
});
