document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });

    document.querySelectorAll(".nav a").forEach((link) => {
      link.addEventListener("click", () => document.body.classList.remove("menu-open"));
    });
  }

  document.querySelectorAll(".faq__q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq__item");
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq__item").forEach((el) => el.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
