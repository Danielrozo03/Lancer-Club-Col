let currentLang = "en"; // idioma predeterminado inglés

const translations = {
  es: {
    title: "Lancer Club Colombia",
    slogan: "👀 mismo modelo, diferentes generaciones, una sola pasión 👀",
    "nav-inicio": "Inicio",
    "nav-quienes": "Quiénes Somos",
    "nav-fotos": "Fotos",
    "nav-video": "Video",
    "nav-redes": "Redes",
    "hero-title": "Un club, una pasión 🚗🔥",
    "hero-text": "Unidos por el mismo modelo, diferentes generaciones.",
    "frase-title": "Frase del día 🧠",
    "frase-btn": "Nueva frase",
  },
  en: {
    title: "Lancer Club Colombia",
    slogan: "👀 Same model, different generations, one passion 👀",
    "nav-inicio": "Home",
    "nav-quienes": "About Us",
    "nav-fotos": "Photos",
    "nav-video": "Video",
    "nav-redes": "Social",
    "hero-title": "One club, one passion 🚗🔥",
    "hero-text": "United by the same model, different generations.",
    "frase-title": "Quote of the Day 🧠",
    "frase-btn": "New Quote",
  }
};

// Traducción de la página
function translatePage() {
  const elements = document.querySelectorAll("[id]");
  elements.forEach(el => {
    if (translations[currentLang][el.id]) {
      el.textContent = translations[currentLang][el.id];
    }
  });
}

// API de frases dinámicas
async function cargarFrase() {
  const frasesLocales = {
    es: [
      "La pasión nos une.",
      "Los autos son el camino, la amistad es el destino.",
      "Misma pasión, diferentes generaciones."
    ],
    en: [
      "Passion unites us.",
      "Cars are the road, friendship is the destination.",
      "Same passion, different generations."
    ]
  };

  try {
    if (currentLang === "es") {
      // usar frases locales en español
      const random = Math.floor(Math.random() * frasesLocales.es.length);
      document.getElementById("frase").textContent = frasesLocales.es[random];
    } else {
      // usar API en inglés
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      document.getElementById("frase").textContent = `"${data.content}" — ${data.author}`;
    }
  } catch (error) {
    // fallback si falla la API
    const random = Math.floor(Math.random() * frasesLocales[currentLang].length);
    document.getElementById("frase").textContent = frasesLocales[currentLang][random];
  }
}

// Eventos
window.onload = () => {
  translatePage();
  cargarFrase();
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("frase-btn");
  if (btn) {
    btn.addEventListener("click", cargarFrase);
  }
});








