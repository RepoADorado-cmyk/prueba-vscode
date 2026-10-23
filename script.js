const tipButton = document.querySelector("#tip-button");
const buttonLabel = document.querySelector("#button-label");
const tipPanel = document.querySelector("#tip-panel");
const closeButton = document.querySelector("#close-tip");

tipButton.addEventListener("click", () => {
  tipPanel.hidden = false;
  buttonLabel.textContent = "Consejo a la vista";
  tipButton.setAttribute("aria-expanded", "true");
  closeButton.focus();
});

closeButton.addEventListener("click", () => {
  tipPanel.hidden = true;
  buttonLabel.textContent = "Ver mi primer consejo";
  tipButton.setAttribute("aria-expanded", "false");
  tipButton.focus();
});

tipButton.setAttribute("aria-expanded", "false");
