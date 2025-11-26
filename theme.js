const body = document.body;
const circle = document.getElementById("themeCircle");
const iconSun = document.getElementById("iconSun");
const iconMoon = document.getElementById("iconMoon");

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("sentinel-theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    iconSun.style.display = "block";
    iconMoon.style.display = "none";
  } else {
    body.classList.remove("light");
    iconSun.style.display = "none";
    iconMoon.style.display = "block";
  }
});

function toggleTheme() {
  const rect = document.querySelector(".toggle-theme").getBoundingClientRect();
  circle.style.top = rect.top + "px";
  circle.style.left = rect.left + "px";
  circle.style.transform = "scale(0)";
  circle.style.transition = "none";

  requestAnimationFrame(() => {
    circle.style.transition = "transform 0.4s ease-out, background 0.3s";
    const maxDim = Math.max(window.innerWidth, window.innerHeight) * 2;
    circle.style.transform = `scale(${maxDim / 40})`;
  });

  setTimeout(() => {
    body.classList.toggle("light");
    if (body.classList.contains("light")) {
      iconSun.style.display = "block";
      iconMoon.style.display = "none";
      localStorage.setItem("sentinel-theme", "light");
    } else {
      iconSun.style.display = "none";
      iconMoon.style.display = "block";
      localStorage.setItem("sentinel-theme", "dark");
    }
    circle.style.transform = "scale(0)";
  }, 300);
}
