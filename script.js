let slideIndex = 0;

const slides = [
  {
    image: 'Assets/home1.avif',
    title: 'Meet Surface Pro',
    text: "This laptop's unrivaled flexibility and AI features like Live Captions and Cocreator enable you to do more than you ever imagined."
  },
  {
    image: 'Assets/home2.avif',
    title: 'Meet Surface Laptop',
    text: "Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop."
  }
];

const banner = document.getElementById("banner");
const heading = banner.querySelector("h1");
const para = banner.querySelector("p");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  const slide = slides[index];
  banner.style.backgroundImage = `url('${slide.image}')`;
  heading.textContent = slide.title;
  para.textContent = slide.text;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function setSlide(index) {
  slideIndex = index;
  showSlide(slideIndex);
}

// Auto-play every 5 seconds
setInterval(nextSlide, 10000);

  const backToTopBtn = document.getElementById("backToTop");

  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  const toggleBtn = document.getElementById('toggle-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (prefersDark && !savedTheme)) {
    document.body.classList.add('dark');
    toggleBtn.textContent = ' Light Mode';
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    toggleBtn.textContent = isDark ? ' Light Mode' : ' Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });