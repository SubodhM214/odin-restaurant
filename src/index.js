import home from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function initTabs() {
  // Map buttons' ids to their respective functions
  const tabs = {
    home,
    menu: loadMenu,
    contact: loadContact,
  };

  // Attach a single event listener to the <nav> element
  const nav = document.querySelector("nav");

  nav.addEventListener("click", (event) => {
    const { id } = event.target; // Get the id of the clicked button
    console.log(id);
    if (tabs[id]) {
      const content = document.getElementById("content");

      // Clear the content div
      content.innerHTML = "";

      // Load the appropriate module
      tabs[id]();
    }
  });
}

// Initialize app
document.addEventListener("DOMContentLoaded", () => {
  home(); // Load the home page by default
  initTabs(); // Set up tabbed navigation
});

console.log("starting");
