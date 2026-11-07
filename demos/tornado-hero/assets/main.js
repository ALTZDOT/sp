(function () {
  var note = document.getElementById("note");
  var buttons = document.querySelectorAll("[data-note]");
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      note.textContent = button.getAttribute("data-note");
    });
  });

  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Закрыть" : "Меню";
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
})();
