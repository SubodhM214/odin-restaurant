const loadMenu = () => {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  menuDiv.innerHTML = `<h1> Our Menu</h1>
  <li>
    Salad: $5.00
  </li>
  <li>
    Sandwich: $7.00
  </li>
  <li>
    Pasta: $10.00
  </li>
  <li>
    Dessert: $8.00
  </li>`;
  content.appendChild(menuDiv);
};

export default loadMenu;
