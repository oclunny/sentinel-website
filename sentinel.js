// Theme
const body = document.body;
const themeBtn = document.getElementById('themeBtn');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

function applyTheme(isLight) {
  body.classList.toggle('light', isLight);
  iconSun.style.display = isLight ? 'block' : 'none';
  iconMoon.style.display = isLight ? 'none' : 'block';
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('sentinel-theme');
  applyTheme(saved === 'light');
});

themeBtn && themeBtn.addEventListener('click', () => {
  const isLight = !body.classList.contains('light');
  applyTheme(isLight);
  localStorage.setItem('sentinel-theme', isLight ? 'light' : 'dark');
});

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Burger
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger && burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Scroll reveal
const reveals = document.querySelectorAll('.showcase-item, .feat-card, .cta-card, .about-text, .page-hero .container > *');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
