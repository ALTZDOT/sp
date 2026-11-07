(function () {
  var note = document.getElementById("note");
  var buttons = document.querySelectorAll("[data-note]");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      note.textContent = button.getAttribute("data-note");
    });
  });
})();
