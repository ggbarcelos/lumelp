(function () {
  const headerOffset = 84;
  const navLinks = Array.from(document.querySelectorAll("#menu-links .nav-link"));

  function scrollToSection(target) {
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  // Clique nos links - rolar suave e fechar menu mobile
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      scrollToSection(target);

      // Fechar menu mobile
      const menu = document.querySelector(".navbar-collapse.show");
      if (menu) {
        const toggler = document.querySelector(".navbar-toggler");
        toggler?.click();
      }
    });
  });

  // Reveal animation observer
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18
    }
  );

  reveals.forEach((item) => revealObserver.observe(item));

  // Fallback para imagens quebradas
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const fallbackText = img.getAttribute("data-fallback") || "Imagem indisponivel";
      const fallback = document.createElement("span");
      fallback.className = "broken-asset";
      fallback.textContent = fallbackText;
      img.replaceWith(fallback);
    });
  });
})();
