const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-active");
    setTimeout(() => button.classList.remove("is-active"), 180);
  });
});
