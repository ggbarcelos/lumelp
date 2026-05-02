(function () {
  const headerOffset = 84;
  const navLinks = Array.from(document.querySelectorAll("#menu-links .nav-link"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const reveals = Array.from(document.querySelectorAll(".reveal"));

  function setActiveLink(id) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function scrollToSection(target) {
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      scrollToSection(target);

      const menu = document.querySelector(".navbar-collapse.show");
      if (menu) {
        const toggler = document.querySelector(".navbar-toggler");
        toggler?.click();
      }
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActiveLink(visible.target.id);
      }
    },
    {
      root: null,
      threshold: [0.25, 0.45, 0.7],
      rootMargin: "-15% 0px -55% 0px"
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

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

  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const fallbackText = img.getAttribute("data-fallback") || "Imagem indisponivel";
      const fallback = document.createElement("span");
      fallback.className = "broken-asset";
      fallback.textContent = fallbackText;
      img.replaceWith(fallback);
    });
  });

  window.addEventListener("load", () => {
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;
    setTimeout(() => scrollToSection(target), 80);
  });
})();
