document.addEventListener("DOMContentLoaded", function () {
  // Ensure that the theme toggle button exists
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    const body = document.body;

    themeToggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      const card = document.querySelector(".card");
      if (card) {
        card.classList.toggle("dark-mode");
      }
    });
  }

  const listItems = document.querySelectorAll(".social-links li");
  listItems.forEach((item) => {
    item.addEventListener("click", function () {
      const link = this.querySelector("a");
      const url = link.getAttribute("href");

      window.open(url, "_blank");
    });

    item.style.cursor = "pointer";
  });
});
