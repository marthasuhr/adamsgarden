const btn = document.querySelector(".burger_menu_knap");
const menu = document.querySelector(".main_menu");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown);
    btn.textContent = "Luk";
  } else {
    console.log(menuShown);
    btn.textContent = "Menu";
  }
}
