const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth >1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector(".gallery");

const modal = document.createElement('dialog');
document.body.appendChild(modal);

gallery.addEventListener('click', (event) => {
    const img = event.target.closest('img');
    if (!img) return;  // Ignore clicks not on images
  
    const src = img.getAttribute('src');  // e.g., "norris-sm.jpeg"
    const alt = img.getAttribute('alt');
  
    // Create the full image src by replacing "-sm" with "-full"
    const fullSrc = src.split('-')[0] + '-full.jpeg';
  
    // Insert HTML into the modal
    modal.innerHTML = `
      <img src="${fullSrc}" alt="${alt}">
      <button class="close-viewer">X</button>
    `;
  
    // Show the modal
    modal.showModal();
  
    // Close button event listener
    modal.querySelector('.close-viewer').addEventListener('click', () => {
      modal.close();
    });
  });
  
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
  

