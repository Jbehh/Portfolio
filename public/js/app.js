import { $, $$ } from "./ui/dom.js";
import { initAnimations } from "./ui/animate.js";

// Theme toggle
const themeToggle = $("#themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// Mobile menu
const menuBtn = $("#menuBtn");
const mobileMenu = $("#mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () =>
    mobileMenu.classList.toggle("hidden")
  );
}

// Year
const year = $("#year");
if (year) year.textContent = new Date().getFullYear();

// Kick off animations
initAnimations();
