/* ============================================================
   SCRIPT.JS OPTIMISÉ – CERIE ÉLECTRICITÉ
   - Navigation mobile (hamburger)
   - Initialisation Swiper
   - Initialisation GLightbox
   - Gestion cookies RGPD
   ============================================================ */

/* ------------------------------
   MENU MOBILE
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      navToggle.classList.toggle("active");
    });
  }
});

/* ------------------------------
   INITIALISATION SWIPER
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {

  if (document.querySelector(".realisations-swiper")) {
    new Swiper(".realisations-swiper", {
      loop: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 20,

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },

      lazy: true,

      breakpoints: {
        640: { slidesPerView: 1 },
        820: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }
    });
  }
});

/* ------------------------------
   INITIALISATION GLIGHTBOX
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".glightbox")) {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      zoomable: false
    });
  }
});

/* ------------------------------
   BANNIÈRE COOKIES RGPD
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const btnAccept = document.getElementById("cookie-accept");
  const btnRefuse = document.getElementById("cookie-refuse");
  const btnSettings = document.getElementById("cookie-settings");

  // Vérification consentement
  const consent = localStorage.getItem("cerie_cookie_consent");

  // Afficher bannière si pas encore choisie
  if (!consent) {
    banner.style.display = "block";
  }

  // Acceptation cookies
  if (btnAccept) {
    btnAccept.addEventListener("click", () => {
      localStorage.setItem("cerie_cookie_consent", "accepted");
      banner.style.display = "none";
      enableAnalytics();
    });
  }

  // Refus cookies
  if (btnRefuse) {
    btnRefuse.addEventListener("click", () => {
      localStorage.setItem("cerie_cookie_consent", "refused");
      banner.style.display = "none";
    });
  }

  // Bouton footer "Gérer les cookies"
  if (btnSettings) {
    btnSettings.addEventListener("click", () => {
      banner.style.display = "block";
    });
  }

  // Si déjà accepté → activer Google Analytics
  if (consent === "accepted") {
    enableAnalytics();
  }
});

/* ------------------------------
   ACTIVATION Google Analytics UNIQUEMENT SI CONSENTEMENT
------------------------------ */
function enableAnalytics() {
  if (window.gtag) {
    gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "granted"
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');

  if (!nav || !navToggle) return;

  // Clic sur le bouton burger
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fermer le menu quand on clique sur un lien
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

