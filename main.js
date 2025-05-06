// При клике на кнопку "В корзину" выводим сообщение
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Товар добавлен в корзину 🛒");
    });
  });
});
