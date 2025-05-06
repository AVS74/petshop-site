// ======= СКРИПТ ДОБАВЛЕНИЯ В КОРЗИНУ =======

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-card button")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Товар добавлен в корзину 🛒")
    })
  })
})
